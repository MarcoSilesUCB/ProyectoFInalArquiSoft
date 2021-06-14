using AutoMapper;
using BackendConcesionaria.DataSale.Entities;
using BackendConcesionaria.DataSale.Repository;
using BackendConcesionaria.Exceptions;
using BackendConcesionaria.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendConcesionaria.Services
{
    public class saleItemService : IsaleItemService
    {
        ILibraryRepository _libraryRepository;
        private IMapper _mapper;

        private HashSet<string> allowedOrderByParameters = new HashSet<string>()
        {
            "id",
            "nameBuyer",
            "amount",
            "totalSale"
        };

        public saleItemService(ILibraryRepository libraryRepository, IMapper mapper)
        {
            _libraryRepository = libraryRepository;
            _mapper = mapper;
        }

        public saleItemModel createSale(saleItemModel newSale)
        {
            var saleEntityI = _mapper.Map<saleEntity>(newSale);
            var returnSale = _libraryRepository.createSale(saleEntityI);
            return _mapper.Map<saleItemModel>(returnSale);
        }

        public deleteModel deleteSale(int id)
        {
            var saleToDelete = getSaleItem(id);
            var result = _libraryRepository.deleteSale(id);
            if (result)
            {
                return new deleteModel()
                {
                    IsSuccess = result,
                    Message = "The sale was successfully removed"
                };
            }
            else
            {
                return new deleteModel()
                {
                    IsSuccess = result,
                    Message = "The sale wasn't removed"
                };
            }
        }
        public IEnumerable<saleItemModel> getSaleItems(string orderBy)
        {
            if (!allowedOrderByParameters.Contains(orderBy.ToLower()))
            {
                throw new BadRequestOperationException($"The field {orderBy} is wrong, please use one of these {string.Join(",", allowedOrderByParameters)}");
            }

            var entityList = _libraryRepository.getSalesItems(orderBy);
            var modelList = _mapper.Map<IEnumerable<saleItemModel>>(entityList);

            return modelList;
        }


        public saleItemModel getSaleItem(int idSale)
        {
            var sale = _libraryRepository.getSaleItem(idSale);
            if (sale == null)
            {
                throw new NotFoundOperationException($"The sale with id: {idSale} doesn't exists");
            }
            return _mapper.Map<saleItemModel>(sale);
        }

        public saleItemModel updateSale(int idSale, saleItemModel sale)
        {
            getSaleItem(idSale);
            sale.idSale = idSale;
            _libraryRepository.updateSale(_mapper.Map<saleEntity>(sale));
            return sale;
        }
    }
}
