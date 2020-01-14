using Common.DataAccess.Mongo;
using NERP.Common.Models;

namespace NERP.NetworkEntities.Models
{
    public class FDP : DbBaseEntity
    {
        public string Name { get; set; }
        public string Code { get; set; }
        public string Description { get; set; }
        public Point Geometry { get; set; }

    }
}
