using Common.Config;
using Common.DataAccess.Interfaces;
using Common.DataAccess.Mongo;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using MongoDB.Driver.GeoJsonObjectModel;
using NERP.Common.Models;
using NERP.GeoServices.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace NERP.GeoServices
{
    public class GeoService<T> where T : IEntity<string>
    {
        private readonly DbSettings _dbSettings;
        
        public GeoService(IOptions<DbConfig> dbConfig)
        {
            var databaseConfig = dbConfig.Value;

            _dbSettings = new DbSettings { ConnectionString = databaseConfig.ConnectionString, Database = databaseConfig.Database };
            
        }

        public async Task<IList<T>> GetPointsInPolygon(Polygon polygon, string collectionName, Expression<Func<T, object>> field)
        {
            var repository = new MongoRepository<T>(_dbSettings, collectionName);

            var filter = Builders<T>.Filter.GeoWithin(field, ListOfLocationsToPolygon(polygon.coordinates.FirstOrDefault()));

            return await repository.GetCollection().Find(filter).ToListAsync();
        }

        public async Task<IList<T>> GetPointsWithinRadius(double[] center, double radius, string collectionName, Expression<Func<T, object>> field)
        {
            var repository = new MongoRepository<T>(_dbSettings, collectionName);

            //var filter = Builders<T>.Filter.Near(field, center.coordinates[0], center.coordinates[1], radius);

            var point = GeoJson.Point(GeoJson.Geographic(center[0], center[1]));

            var filter = Builders<T>.Filter.Near(field, point, radius);

            return await repository.GetCollection().Find(filter).ToListAsync();
        }

        public async Task<IList<T>> GetIntersects(Polygon cluster, string collectionName, Expression<Func<T, object>> field)
        {
            var repository = new MongoRepository<T>(_dbSettings, collectionName);

            var geometry = ListOfLocationsToPolygon(cluster.coordinates.FirstOrDefault());

            var filter = Builders<T>.Filter.GeoIntersects(field, geometry);

            return await repository.GetCollection().Find(filter).ToListAsync();
        }

        public async Task<IList<T>> GetIntersects(LineString line, string collectionName, Expression<Func<T, object>> field)
        {
            var repository = new MongoRepository<T>(_dbSettings, collectionName);

            var geometry = ListOfLocationsToPolygon(line.coordinates);

            var filter = Builders<T>.Filter.GeoIntersects(field, geometry);

            return await repository.GetCollection().Find(filter).ToListAsync();
        }

        public async Task<IList<T>> GetIntersects(Point point, string collectionName, Expression<Func<T, object>> field)
        {
            var repository = new MongoRepository<T>(_dbSettings, collectionName);

            var geometry = new GeoJsonPoint<GeoJson2DGeographicCoordinates>(new GeoJson2DGeographicCoordinates(point.coordinates[0], point.coordinates[1]));

            var filter = Builders<T>.Filter.GeoIntersects(field, geometry);

            return await repository.GetCollection().Find(filter).ToListAsync();
        }

        public async Task<IList<T>> FindNear(string collectionName, Expression<Func<T, object>> field, double longitude, double latitude, double maxDistanceInKm)
        {
            var repository = new MongoRepository<T>(_dbSettings, collectionName);

            var point = GeoJson.Point(GeoJson.Geographic(longitude, latitude));
            var filter = Builders<T>.Filter.Near(field, point, maxDistanceInKm * 1000);
            
            return await repository.GetCollection().Find(filter).ToListAsync();
        }

        public static double GetDistanceInKm(double lat1, double lon1, double lat2, double lon2)
        {

            var R = 6371; 

            var dLat = ToRadians(lat2 - lat1);

            var dLon = ToRadians(lon2 - lon1);

            var a =

                Math.Sin(dLat / 2) * Math.Sin(dLat / 2) +

                Math.Cos(ToRadians(lat1)) * Math.Cos(ToRadians(lat2)) *

                Math.Sin(dLon / 2) * Math.Sin(dLon / 2);

            var c = 2 * Math.Atan2(Math.Sqrt(a), Math.Sqrt(1 - a));

            var d = R * c;

            return d;

        }

        public static double ToRadians(double degrees)
        {
            return degrees * (Math.PI / 180);
        }

        public static double ToDegrees(double radians)
        {
            return radians / ((Math.PI) / 180);
        }

        public static Position CalculateOffset(double latitude, double longitude, double offsetDistanceInKm, double heading)
        {
            offsetDistanceInKm /= 6371;
            heading = ToRadians(heading);
            double fromLat = ToRadians(latitude);
            double fromLng = ToRadians(longitude);
            double cosDistance = Math.Cos(offsetDistanceInKm);
            double sinDistance = Math.Sin(offsetDistanceInKm);
            double sinFromLat = Math.Sin(fromLat);
            double cosFromLat = Math.Cos(fromLat);
            double sinLat = cosDistance * sinFromLat + sinDistance * cosFromLat * Math.Cos(heading);
            double dLng = Math.Atan2(sinDistance * cosFromLat * Math.Sin(heading), cosDistance - sinFromLat - sinLat);

            Position position = new Position(ToDegrees(Math.Asin(sinLat)), ToDegrees(fromLng + dLng));

            return position;

        }

        public static GeoJsonPolygon<GeoJson2DGeographicCoordinates> ListOfLocationsToPolygon(IEnumerable<double[]> Locations)
        {
            List<GeoJson2DGeographicCoordinates> geographicList = new List<GeoJson2DGeographicCoordinates>();
            foreach (var location in Locations)
            {
                geographicList.Add(GeoJson.Geographic(location[0], location[1]));
            }
            return GeoJson.Polygon(geographicList.ToArray());
        }

        public static IEnumerable<double[]> PolygonToListOfLocations(GeoJsonPolygon<GeoJson2DGeographicCoordinates> Poligon)
        {
            List<double[]> result = new List<double[]>();
            foreach (var c in Poligon.Coordinates.Exterior.Positions)
            {
                var loc = new double[] { c.Longitude, c.Latitude };
                result.Add(loc);
            }
            return result;
        }
    }
}
