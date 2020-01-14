using NERP.Common.Models;

namespace NERP.NetworkEntities.Models
{
    public class POP : BaseNetworkEntity
    {
        public Point Geometry { get; set; }
        public Installation Installation { get; set; }
        public Owner Owner { get; set; }
    }
}
