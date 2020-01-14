using NERP.Common.Models;

namespace NERP.NetworkEntities.Models
{
    public class Pole : BaseNetworkEntity
    {
        public Point Geometry { get; set; }
        public double PoleHeight { get; set; }
        public Installation Installation { get; set; }
        public Owner Owner { get; set; }
        public string LoopLength { get; set; }
    }
}
