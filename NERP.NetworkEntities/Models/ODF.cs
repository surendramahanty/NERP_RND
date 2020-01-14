using NERP.Common.Models;

namespace NERP.NetworkEntities.Models
{
    public class ODF : BaseNetworkEntity
    {
        public Point Geometry { get; set; }
        public int? NoOfPorts { get; set; }
        public string MountingType { get; set; }
        public double Height { get; set; }
        public double Weidth { get; set; }
        public double Length { get; set; }
        public Installation Installation { get; set; }
        public Owner Owner { get; set; }

    }
}
