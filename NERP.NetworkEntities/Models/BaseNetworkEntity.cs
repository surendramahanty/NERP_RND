﻿using Common.DataAccess.Mongo;
using NERP.Common.Models;
using System.Collections.Generic;

namespace NERP.NetworkEntities.Models
{
    public class BaseNetworkEntity : DbBaseEntity
    {
        public string EntityType { get; set; }
        public string Name { get; set; }
        public string Code { get; set; }
        public string Icon { get; set; }
        public string RegionId { get; set; }
        public string ParentId { get; set; }
        public string ParentEntityType { get; set; }
        public string ConstructionStage { get; set; }
        public string ActivationStage { get; set; }
        public string Accessibility { get; set; }
        public string HierarchyType { get; set; }
        public string Type { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
        public int ZoomLevel { get; set; }
        public List<CustomField> CustomFields { get; set; }
        public List<FileAttachment> Photos { get; set; }
        public List<FileAttachment> Attachments { get; set; }
        public List<Supplier> Suppliers { get; set; }
    }
}
