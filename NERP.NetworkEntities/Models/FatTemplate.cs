using System;
using System.Collections.Generic;
using System.Text;

namespace NERP.NetworkEntities.Models
{
   public class FatTemplate
    {
        public string TemplateCode { get; set; }
        public string TemplateName { get; set; }
        public int? PigtailCount { get; set; }
        public int? SplitterCount { get; set; }
        public DateTime? UpdatedDate { get; set; }
    }
}
