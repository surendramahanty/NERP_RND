using System.Collections.Generic;

namespace NERP.RND.Web.Models
{
    public class UserProfileVm
    {
        public string Id { get; set; }

        public string LoginId { get; set; }

        public string Name { get; set; }

        public List<string> Permissions { get; set; }

        public List<string> Features { get; set; }

    }
}
