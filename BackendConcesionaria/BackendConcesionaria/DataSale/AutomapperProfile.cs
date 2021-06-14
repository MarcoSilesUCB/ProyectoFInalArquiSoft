using AutoMapper;
using BackendConcesionaria.DataSale.Entities;
using BackendConcesionaria.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendConcesionaria.DataSale
{
    public class AutomapperProfile : Profile
    {
        public AutomapperProfile()
        {
            this.CreateMap<saleEntity, saleItemModel>()
                .ReverseMap();
        }
    }
}
