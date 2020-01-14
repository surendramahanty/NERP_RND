using NERP.NetworkEntities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NERP.GeoServices.API.Models
{
    public class Node
    {
        public string Id { get; set; }
        public string Start { get; set; }
        public string End { get; set; }
        public string FullPath { get; set; }
        public List<List<double>> Coordinates { get; set; }


        public List<Accessory> Accessories{ get; set; }
        public List<Civilwork> Civilworks { get; set; }

        public Cable Cable { get; set; }
        public List<Chamber> Chambers { get; set; }
        public List<Duct> Ducts { get; set; }
        public List<ODF> Odfs { get; set; }
        public List<Pole> Poles { get; set; }
        public List<Splitter> Splitters { get; set; }
        public List<SpliceClosure> SpliceClosures { get; set; }

    }
}
