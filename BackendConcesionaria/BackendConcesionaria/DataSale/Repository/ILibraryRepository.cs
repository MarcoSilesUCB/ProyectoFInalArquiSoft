using BackendConcesionaria.DataSale.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendConcesionaria.DataSale.Repository
{
    public interface ILibraryRepository
    {
        IEnumerable<saleEntity> getSalesItems(string orderBy);
        saleEntity getSaleItem(int idSale);
        saleEntity createSale(saleEntity saleModel);
        bool deleteSale(int idSale);
        bool updateSale(saleEntity saleModel);
    }
}
