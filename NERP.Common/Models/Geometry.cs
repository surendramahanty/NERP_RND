using System.Collections.Generic;

namespace NERP.Common.Models
{
    public class Point
    {
        public string type { get; set; } = "Point";

        public double[] coordinates { get; set; }

    }

    public class MultiPoint
    {
        public string type { get; set; } = "MultiPoint";

        public IEnumerable<double[]> coordinates { get; set; }

    }

    public class LineString
    {
        public string type { get; set; } = "LineString";

        public IEnumerable<double[]> coordinates { get; set; }

    }

    public class MultiLineString
    {
        public string type { get; set; } = "MultiLineString";

        public IEnumerable<IEnumerable<double[]>> coordinates { get; set; }

    }

    public class Polygon
    {
        public string type { get; set; } = "Polygon";

        public IEnumerable<IEnumerable<double[]>> coordinates { get; set; }
        //public GeoJsonPolygon<GeoJson2DGeographicCoordinates> Coordinates { get; set; }

    }

    public class MultiPolygon
    {
        public string type { get; set; } = "MultiPolygon";

        public IEnumerable<IEnumerable<IEnumerable<double[]>>> coordinates { get; set; }

    }

}
