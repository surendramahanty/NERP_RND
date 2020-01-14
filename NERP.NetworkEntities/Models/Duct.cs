using NERP.Common.Models;

namespace NERP.NetworkEntities.Models
{
    public class Duct : BaseNetworkEntity
    {
        public LineString Geometry { get; set; }
        public double? MeasuredLength { get; set; }
        public double? CalculatedLength { get; set; }
        public double? Height { get; set; }
        public double? Width { get; set; }
        public double? InnerDiameter { get; set; }
        public double? OuterDiameter { get; set; }
        public Installation Installation { get; set; }
        public Owner Owner { get; set; }
    }
}
