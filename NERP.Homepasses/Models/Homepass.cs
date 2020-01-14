using Common.DataAccess.Mongo;
using NERP.Common.Models;
using System.Collections.Generic;

namespace NERP.Homepasses.Model
{
    public class Homepass : DbBaseEntity
    {
        public string Name { get; set; }
        public string Code { get; set; }
        public string Description { get; set; }
        public string Type { get; set; }
        public string Status { get; set; }
        public Point Geometry { get; set; }
        public Polygon Area { get; set; }

        public int ZoomLevel { get; set; }
        public List<CustomField> CustomFields { get; set; }
        public List<FileAttachment> Photos { get; set; }
        public List<FileAttachment> Attachments { get; set; }

        public int Connections { get; set; }
    }
}
