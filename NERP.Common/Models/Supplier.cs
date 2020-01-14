using System;

namespace NERP.Common.Models
{
    public class Supplier
    {
        public string Name { get; set; }
        public string Sku { get; set; }
        public double? StockQty { get; set; }
        public double? Price { get; set; }
        public string Currency { get; set; }
        public DateTime? ValidFrom { get; set; }
        public DateTime? ValidTo { get; set; }
        public bool IsPrefered { get; set; }
        public double? ServiceCost { get; set; }
        public string Default { get; set; }
    }
}
