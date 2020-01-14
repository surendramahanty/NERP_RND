using NERP.Common.Models;
using System.Collections.Generic;

namespace NERP.NetworkEntities.Models
{
    public class FAT : BaseNetworkEntity
    {
        public string TemplateCode { get; set; }
        public string TemplateName { get; set; }
        public int? NoOfSplitters { get; set; }
        public int? PigtailCount { get; set; }
        public string ConnectionType { get; set; }
        public string Topology  { get; set; }
        public Point Geometry { get; set; }
        public List<FatTemplate> Template { get; set; }
        //public List<Splitter> SplitterEntity { get; set; }
        //public List<ODF> OdfEntity { get; set; }
        public Optics Optics { get; set; }

        public Owner Owner { get; set; }

        public Installation Installation { get; set; }

    }
}
