using System.Collections.Generic;

namespace NERP.GeoServices.API.Models
{
    public class AppSettings
    {
        public RoutewareSettings RoutewareSettings { get; set; }
    }

    public class RoutewareSettings
    {
        public string Password { get; set; }
        public string BinFolder { get; set; }
        public string ShapeFolder { get; set; }
        public string OutputFolder { get; set; }
        public string SteinerTreeFile { get; set; }
    }
}
