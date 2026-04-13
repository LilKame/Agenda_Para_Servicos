using System;
using System.Collections.Generic;
using System.Text;

namespace AgendaInteligente.Domain.Entities
{
    public class Company
    {
        public Guid CompanyId { get; set; } = Guid.NewGuid();
        public string Name { get; set;  }
        public string Email { get; set; }
    }
}
