using System;

namespace NERP.NetworkEntities.Models
{
    public class Installation
    {
        public string Number { get; set; }

        public int? Year { get; set; }

        public string Company { get; set; }

        public string Technician { get; set; }

        public int? ProductionYear { get; set; }

        public DateTime? Date { get; set; }

    }
}
