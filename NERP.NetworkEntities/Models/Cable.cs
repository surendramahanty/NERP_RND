using NERP.Common.Models;

namespace NERP.NetworkEntities.Models
{
    public class Cable : BaseNetworkEntity
    {
        public string ALocation { get; set; }
        public string BLocation { get; set; }
        public LineString Geometry { get; set; }
        public bool? IsUnderground { get; set; }
        public double? MeasuredLength { get; set; }
        public double? CalculatedLength { get; set; }
        public int? NoOfTubes { get; set; }
        public int? CorePerTube { get; set; }
        //public string Core_Access { get; set; }
        //public List<ColorSettings> TubeColorSettings { get; set; }
        //public List<ColorSettings> CoreColorSettings { get; set; }
        public Optics Optics { get; set; }
        public Installation Installation { get; set; }
        public Owner Owner { get; set; }
    }
}
