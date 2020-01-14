using Common.DataAccess.Mongo;
using NERP.Common.Models;
using System.Collections.Generic;

namespace NERP.Entities
{
    public class Layer : DbBaseEntity
    {
        public string Name { get; set; }
        public string Type { get; set; }
        public string ShapeFileName { get; set; }
        public string Color { get; set; }
        public string Thickness { get; set; }
        public string PointerImagePath { get; set; }
        public List<string> Metadata { get; set; }
        public List<Records> Data { get; set; }
    }
    public class Records
    {
        public string Id { get; set; }
        public LineString Geometry { get; set; }
        public List<object> Attributes { get; set; }
    }

}
