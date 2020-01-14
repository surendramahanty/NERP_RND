using System;
using System.Collections.Generic;
using System.Text;

namespace NERP.NetworkEntities.Models
{
   public class FdtTemplate
    {
        public string TemplateCode { get; set; }
        public string TemplateName { get; set; }
        public int? OdfCount { get; set; }
        public int? SplitterCount { get; set; }
        public DateTime? UpdatedDate { get; set; }
    }
}
