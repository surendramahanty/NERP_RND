using NERP.Common.Models;

namespace NERP.NetworkEntities.Models
{
    public class MicroDuct : BaseNetworkEntity
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


        public string ALocation { get; set; }
        public string BLocation { get; set; }
        public bool? IsUnderground { get; set; }
        public int? NoOfTubes { get; set; }
        public int? CorePerTube { get; set; }
        //public string Core_Access { get; set; }
        //public List<ColorSettings> TubeColorSettings { get; set; }
        //public List<ColorSettings> CoreColorSettings { get; set; }
        public Optics Optics { get; set; }
    }
}
