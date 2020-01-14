using Common.DataAccess.Mongo;
using NERP.Common.Models;
using NERP.NetworkEntities.Models;
using System.Collections.Generic;

namespace NERP.Designs.Models
{
    public class Design : DbBaseEntity
    {
        public string ReferenceId { get; set; }
        public string Name { get; set; }
        public string Code { get; set; }
        public string Description { get; set; }
        public string DesignType { get; set; }
        public string AssignedTo { get; set; }
        public double Version { get; set; }
        public List<Document> Documents { get; set; }
        public string ClusterId { get; set; }
        public List<Homepass> Homepasses { get; set; }
        public List<BookingId> BookingIds { get; set; }
        public List<NetworkSetting> NetworkSettings { get; set; }
        public string Log { get; set; }
        public List<Costing> Boq { get; set; }
        public GeoNode BluePrint { get; set; }
        public string Status { get; set; }
        public string ProjectId { get; set; }
        public string ClusterCode { get; set; }
    }


    public class Costing
    {
        public string Level { get; set; }
        public string EntityType { get; set; }
        public string Code { get; set; }
        public string Description { get; set; }
        public string Units { get; set; }
        public double Quantity { get; set; }
        public double? MaterialCost { get; set; }
        public double? ServiceCost { get; set; }
        public string Currency { get; set; }
    }

    public class NetworkSetting
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Position { get; set; }
        public NodeSettings StartNode { get; set; }
        public NodeSettings DestinationNode { get; set; }
        public NodeSettings FDPNode { get; set; }
        public Cabling Cabling { get; set; }
    }

    public class NodeSettings
    {
        public EntitySettings EntitySettings { get; set; }
        public FDPSettings FDPSettings { get; set; }
        public AccessorySettings AccessorySettings { get; set; }
        public CivilworkSettings CivilworkSettings { get; set; }
        public DuctSettings DuctSettings { get; set; }
        public EquipmentSettings EquipmentSettings { get; set; }
        public double FiberDrop { get; set; }
    }

    public class Cabling
    {
        public CableSettings CableSettings { get; set; }
        public SpliceClosureSettings SpliceClosureSettings { get; set; }
        public AccessorySettings AccessorySettings { get; set; }
        public DuctSettings DuctSettings { get; set; }
    }

    public class EntitySettings
    {
        public string EntityName { get; set; }
        public string DataSource { get; set; }
        public string ExistingDesignId { get; set; }
        public string ImportedFile { get; set; }
        public List<Chamber> Chambers { get; set; }
        public List<ODF> ODFs { get; set; }
        public List<Pole> Poles { get; set; }
        public List<SpliceClosure> SpliceClosures { get; set; }
        public List<Splitter> Splitters { get; set; }

    }

    public class FDPSettings
    {
        public string DataSource { get; set; }
        public string ExistingDesignId { get; set; }
        public string ImportedFile { get; set; }
        public List<FDP> Fdps { get; set; }
    }

    public class AccessorySettings
    {
        public string EntityName { get; set; }
        public string DataSource { get; set; }
        public List<Accessory> Accessories { get; set; }
        public List<Accessory> ExistingAccessories { get; set; }
    }

    public class CivilworkSettings
    {
        public List<Civilwork> Civilworks { get; set; }
    }

    public class DuctSettings
    {
        public List<Duct> Ducts { get; set; }
    }

    public class EquipmentSettings
    {
        public string EntityName { get; set; }
        public string DataSource { get; set; }
        public List<string> Equipments { get; set; }
    }

    public class CableSettings
    {
        public string CableType { get; set; }
        public string DataSource { get; set; }
        public List<Cable> Cables { get; set; }
        public Pole Pole { get; set; }
        public Chamber Chamber { get; set; }
        public double ChamberInterval { get; set; }
        public double CableLoop { get; set; }
        public double LoopInterval { get; set; }
        public double LoopAtClosure { get; set; }
        public double ConnectionPercent { get; set; }
    }

    public class SpliceClosureSettings
    {
        public string EntityName { get; set; }
        public string DataSource { get; set; }
        public List<SpliceClosure> SpliceClosures { get; set; }
        public bool StraightJoin { get; set; }
        public double DrumLength { get; set; }
        public bool IntersectionJoints { get; set; }
    }
}
