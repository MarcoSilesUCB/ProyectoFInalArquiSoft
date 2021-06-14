using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendConcesionaria.DataSale.Entities
{
    public class saleEntity
    {
        public int idSale { get; set; }
        public string idItem { get; set; }
        public string nameBuyer { get; set; }
        public int? amount { get; set; }
        public int? totalSale { get; set; }
        public string dateSale { get; set; }
    }
}
