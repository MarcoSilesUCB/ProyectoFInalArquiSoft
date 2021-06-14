using BackendConcesionaria.DataSale.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendConcesionaria.DataSale.Repository
{
    public class LibraryRepository : ILibraryRepository
    {
        private List<saleEntity> saleItems = new List<saleEntity>
        {
            new saleEntity() { idSale = 1, idItem = 1, nameBuyer = "Ricardo", amount = 2, totalSale = 350, dateSale = "13-06-2021" },
            new saleEntity() { idSale = 2, idItem = 2, nameBuyer = "Antonio", amount = 4, totalSale = 550, dateSale = "14-06-2021" },
        };
        public saleEntity createSale(saleEntity sale)
        {
            int newIdSale;
            if (saleItems.Count == 0)
            {
                newIdSale = 1;
            }
            else
            {
                newIdSale = saleItems.OrderByDescending(s => s.idSale).FirstOrDefault().idSale + 1;
            }
            sale.idSale = newIdSale;

            saleItems.Add(sale);
            return sale;
        }

        public bool deleteSale(int idSale)
        {
            var saleToDelete = saleItems.FirstOrDefault(saleItem => saleItem.idSale == idSale);
            saleItems.Remove(saleToDelete);
            return true;
        }

        public saleEntity getSaleItem(int idSale)
        {
            return saleItems.FirstOrDefault(saleItem => saleItem.idSale == idSale);
        }

        public IEnumerable<saleEntity> getSalesItems(string orderBy)
        {
            switch(orderBy)
            {
                case "idSale":
                    return saleItems.OrderBy(saleItem => saleItem.idSale);
                case "idItem":
                    return saleItems.OrderBy(saleItem => saleItem.idItem);
                case "nameBuyer":
                    return saleItems.OrderBy(saleItem => saleItem.nameBuyer);
                case "amount":
                    return saleItems.OrderBy(saleItem => saleItem.amount);
                case "totalSale":
                    return saleItems.OrderBy(saleItem => saleItem.totalSale);
                case "dateSale":
                    return saleItems.OrderBy(saleItem => saleItem.dateSale);
                default:
                    return saleItems.OrderBy(saleItem => saleItem.idSale);
            }
        }

        public bool updateSale(saleEntity saleModel)
        {
            var saleToUpdate = getSaleItem(saleModel.idSale);
            saleToUpdate.idItem = saleModel.idItem ?? saleToUpdate.idItem;
            saleToUpdate.nameBuyer = saleModel.nameBuyer ?? saleToUpdate.nameBuyer;
            saleToUpdate.amount = saleModel.amount ?? saleToUpdate.amount;
            saleToUpdate.totalSale = saleModel.totalSale?? saleToUpdate.totalSale;
            saleToUpdate.dateSale = saleModel.dateSale?? saleToUpdate.dateSale;
            return true;
        }
    }
}
