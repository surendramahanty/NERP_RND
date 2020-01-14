using Common.Config;
using Common.DataAccess.Models;
using Common.DataAccess.Mongo;
using Microsoft.Extensions.Options;
using NERP.Common.Models;
using NERP.GeoServices;
using NERP.Homepasses.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace NERP.Homepasses
{
    public class HomepassService : IHomepassService
    {
        private readonly IRepository<Homepass> _homepassesRepository;
        private readonly GeoService<Homepass> _geoService;
        private const string HomepassesRepository = "Homepasses";

        public HomepassService(IOptions<DbConfig> dbConfig)
        {
            var databaseConfig = dbConfig.Value;

            var dbSettings = new DbSettings { ConnectionString = databaseConfig.ConnectionString, Database = databaseConfig.Database };

            _homepassesRepository = new MongoRepository<Homepass>(dbSettings, HomepassesRepository);
            _geoService = new GeoService<Homepass>(dbConfig);
        }

        public async Task<Homepass> GetHomepass(string homepassId)
        {
            if (string.IsNullOrEmpty(homepassId)) return null;

            return await _homepassesRepository.GetByIdAsync(homepassId);
        }

        public async Task<IEnumerable<Homepass>> GetHomepasses(SearchFilter searchFilter = null, string orderBy = null, SortOrder sortOrder = SortOrder.Descending, int? page = null, int? pageSize = null)
        {
            Expression<Func<Homepass, bool>> filterExpression = x => true;

            if (searchFilter != null && searchFilter.Filters.Count > 0)
                filterExpression = ExpressionBuilder.GetExpression<Homepass>(searchFilter);

            IList<Homepass> homepasses = null;

            if (page != null && pageSize != null)
                homepasses = (await _homepassesRepository.GetPaginatedAsync(filterExpression, orderBy, sortOrder, (int)page, (int)pageSize)).ToList();
            else
                homepasses = (await _homepassesRepository.GetAllAsync(filterExpression, null, orderBy, sortOrder)).ToList();

            return homepasses;
        }

        public async Task<IEnumerable<Homepass>> GetHomepasses(IList<string> ids)
        {
            return (await _homepassesRepository.GetByIdsAsync(ids)).ToList();
        }

        public async Task<IEnumerable<Homepass>> GetHomepassesInCluster(Polygon cluster, bool includeDeteted = false)
        {
            var homepasses = await _geoService.GetPointsInPolygon(cluster, "Homepasses", x => x.Geometry);

            if (includeDeteted)
                return homepasses;
            else
                return homepasses.Where(x => x.IsDeleted == includeDeteted);
        }

        public async Task<IEnumerable<Homepass>> GetPointsWithinRadius(double[] center, double radius, bool includeDeteted = false)
        {
            var homepasses = await _geoService.GetPointsWithinRadius(center, radius, "Homepasses", x => x.Geometry);

            if (includeDeteted)
                return homepasses;
            else
                return homepasses.Where(x => x.IsDeleted == includeDeteted);
        }

        public async Task<long> GetHomepassesCount(SearchFilter searchFilter = null)
        {
            Expression<Func<Homepass, bool>> filterExpression = x => true;

            if (searchFilter != null && searchFilter.Filters.Count > 0)
            {
                filterExpression = ExpressionBuilder.GetExpression<Homepass>(searchFilter);
            }

            return await _homepassesRepository.CountAsync(filterExpression);
        }

        public async Task<string> CheckNameExists(string name)
        {
            var homepass = await _homepassesRepository.GetOneAsync(x => x.Name == name);

            return homepass?.Id;
        }

        public async Task<Homepass> SaveHomepass(Homepass homepass)
        {
            return await _homepassesRepository.UpdateOneAsync(homepass);
        }

        public async Task<bool> DeleteHomepass(string homepassId)
        {
            return (await _homepassesRepository.DeleteByIdAsync(homepassId)) == 1;
        }
    }
}
