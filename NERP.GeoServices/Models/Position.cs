namespace NERP.GeoServices.Models
{
    public class Position :IPosition
    {
        public double? Altitude { get; set; }

        public double Latitude { get; set; }

        public double Longitude { get; set; }

        public Position(double latitude, double longitude, double? altitude = null)
        {
            Latitude = latitude;
            Longitude = longitude;
            Altitude = altitude;
        }
    }
}
