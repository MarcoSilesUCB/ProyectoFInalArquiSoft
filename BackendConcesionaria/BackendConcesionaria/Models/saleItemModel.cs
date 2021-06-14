using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BackendConcesionaria.Models
{
    public class saleItemModel
    {
        public int idSale { get; set; }
        [Required]
        public string idItem { get; set; }
        public string nameBuyer { get; set; }
        public int amount { get; set; }
        public int totalSale { get; set; }
        public string dateSale { get; set; }
    }
}
