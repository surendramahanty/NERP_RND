using NERP.Common.Models;

namespace NERP.NetworkEntities.Models
{
    public class Splitter : BaseNetworkEntity
    {
        public Point Geometry { get; set; }
        public string SplitterRatio { get; set; }
        public double? LossValue { get; set; }
        public Optics Optics { get; set; }
        public Installation Installation { get; set; }
        public Owner Owner { get; set; }
    }
}
