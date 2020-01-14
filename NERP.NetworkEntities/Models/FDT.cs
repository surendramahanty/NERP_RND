using NERP.Common.Models;
using System.Collections.Generic;

namespace NERP.NetworkEntities.Models
{
    public class FDT : BaseNetworkEntity
    {
        public string TemplateCode { get; set; }
        public string TemplateName { get; set; }
        public int? SplitterCount { get; set; }
        public int? OdfCount { get; set; }
        public string ConnectionType { get; set; }
        public string Topology { get; set; }
        public Point Geometry { get; set; }
        public List<FdtTemplate> Template { get; set; }
        public List<Splitter> SplitterEntity { get; set; }
        //public List<PigtailsInformation> PigtailEntity { get; set; }
        public Optics Optics { get; set; }
        public Owner Owner { get; set; }
        public Installation Installation { get; set; }
    }
}
