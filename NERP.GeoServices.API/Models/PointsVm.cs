using System.Collections.Generic;

namespace NERP.GeoServices.API.Models
{
    public class PointsVm
    {
        public List<GeoNode> Nodes { get; set; }
        public string Region { get; set; }
    }

    //public class GeoNode
    //{
    //    public string Id { get; set; }
    //    public double[] Coordinates { get; set; }
    //}
}
