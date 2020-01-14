using NERP.Common.Models;

namespace NERP.NetworkEntities.Models
{
    public class Chamber : BaseNetworkEntity
    {
        public Point Geometry { get; set; }
        public string ChamberCategory { get; set; }
        public string ChamberClosureType { get; set; }
        public string SpliceTrayCount { get; set; }
        public bool IsBuried { get; set; }
        public Installation Installation { get; set; }
        public Owner Owner { get; set; }
        public string LoopLength { get; set; }
    }
}
