using Microsoft.AspNetCore.Http;
using System.Collections.Generic;

namespace NERP.RND.Web.Models
{
    public class DesignVm
    {
        public string SerializedDesign { get; set; }
        public List<IFormFile> DocumentFiles { get; set; }
    }
}
