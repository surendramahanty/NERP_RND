
namespace NERP.Common.Models
{
    public class BookingId
    {
        public string EntityType { get; set; }
        public string Format { get; set; }
        public double? SequenceStart { get; set; }
        public double? SequenceEnd { get; set; }
        public double? Step { get; set; }
    }
}
