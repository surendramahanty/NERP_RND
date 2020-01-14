using System.Collections.Generic;

namespace NERP.GeoServices.API.Models
{
    public class GeoJosn
    {
        public string type { get; set; }
        public List<Feature> features { get; set; }
    }
    public class Properties
    {
        public int ID { get; set; }
        public int FromNode { get; set; }
        public int ToNode { get; set; }
        public int CulDeSac { get; set; }
        public int Attribute { get; set; }
        public int RoadClass { get; set; }
        public int Hierarchy { get; set; }
        public int NoDriveThrough { get; set; }
        public int Oneway { get; set; }
        public int RoundAbout { get; set; }
        public int NonDrive { get; set; }
        public int UturnFrom { get; set; }
        public int UturnTo { get; set; }
        public int SearchLink { get; set; }
        public int Limit1 { get; set; }
        public int Limit2 { get; set; }
        public string Roadname1 { get; set; }
    }

    public class Geometry
    {
        public string type { get; set; }
        public List<List<double>> coordinates { get; set; }
    }

    public class Feature
    {
        public string type { get; set; }
        public Properties properties { get; set; }
        public Geometry geometry { get; set; }
    }


}
