using NERP.Common.Models;
using System.Collections.Generic;

namespace NERP.GeoServices.API.Models
{
    public class GeoNode
    {
        public string Id { get; set; }
        public int Level { get; set; }
        public string LevelName { get; set; }
        public double[] Coordinates { get; set; }
        public double Connections { get; set; }
        public List<GeoNode> Children { get; set; }
        public List<Node> Segments { get; set; }

    }

    //public class Segment
    //{
    //    public string Id { get; set; }
    //    public Point Start { get; set; }
    //    public Point End { get; set; }
    //    public string FullPath { get; set; }
    //    public List<List<double>> Coordinates { get; set; }
    //}

}
