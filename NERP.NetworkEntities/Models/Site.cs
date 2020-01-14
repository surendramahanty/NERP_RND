using NERP.Common.Models;

namespace NERP.NetworkEntities.Models
{
    public class Site : BaseNetworkEntity
    {
        public Point Geometry { get; set; }
        public Polygon Polygon { get; set; }

        public Installation Installation { get; set; }
        public Owner Owner { get; set; }

    }
}
