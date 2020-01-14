using NERP.Common.Models;

namespace NERP.NetworkEntities.Models
{
    public class SpliceClosure : BaseNetworkEntity
    {
        public Point Geometry { get; set; }
        public int? NoOfPorts { get; set; }
        public Installation Installation { get; set; }
        public Owner Owner { get; set; }
    }
}
