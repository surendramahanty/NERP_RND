using System.Collections.Generic;

namespace NERP.NetworkEntities.Models
{
    public class GeoNode
    {
        public string Id { get; set; }
        public int Level { get; set; }
        public string LevelName { get; set; }
        public double[] Coordinates { get; set; }
        public double Connections { get; set; }
        public List<GeoNode> Children { get; set; }
        public List<Segment> Segments { get; set; }

    }

    public class Segment
    {
        public string Id { get; set; }
        public string Start { get; set; }
        public string End { get; set; }
        public string FullPath { get; set; }
        public List<List<double>> Coordinates { get; set; }

        public List<Accessory> Accessories { get; set; }
        public List<Civilwork> Civilworks { get; set; }
        public Cable Cable { get; set; }
        public List<Chamber> Chambers { get; set; }
        public Duct Ducts { get; set; }
        public List<ODF> Odfs { get; set; }
        public List<Pole> Poles { get; set; }
        public List<Splitter> Splitters { get; set; }
        public List<SpliceClosure> SpliceClosures { get; set; }
        public MicroDuct microduct { get; set; }
        public List<POP> pops { get; set; }
        public List<FAT> fats { get; set; }
        public List<FDT> fdts { get; set; }
    }
}
