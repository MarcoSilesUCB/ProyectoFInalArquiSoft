using BackendConcesionaria.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendConcesionaria.Services
{
    public interface IsaleItemService
    {
        IEnumerable<saleItemModel> getSaleItems(string orderBy);
        saleItemModel getSaleItem(int idSale);
        saleItemModel createSale(saleItemModel newSale);
        deleteModel deleteSale(int id);
        saleItemModel updateSale(int idSale, saleItemModel sale);
    }
}
