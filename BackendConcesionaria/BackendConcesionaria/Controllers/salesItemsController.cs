using BackendConcesionaria.Exceptions;
using BackendConcesionaria.Models;
using BackendConcesionaria.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace BackendConcesionaria.Controllers
{
    [Route("api/[controller]")]
    public class salesItemsController : Controller
    {
        private IsaleItemService _saleItemService;
        public salesItemsController(IsaleItemService saleItemService)
        {
            this._saleItemService = saleItemService;
        }
        //api/concessionaire/salesItems
        [HttpGet]
        public ActionResult<IEnumerable<saleItemModel>> getSalesItems(string orderBy = "Id", bool showSale = false)
        {
            try
            {
                return Ok(_saleItemService.getSaleItems(orderBy));
            }
            catch (BadRequestOperationException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Something happend: {ex.Message} ");
            }
        }
        //api/concessionaire/salesitems/id
        [HttpGet("{idSale:int}", Name = "GetSaleItem")]
        public ActionResult<saleItemModel> GetSaleItem(int idSale)
        {
            try
            {
                return _saleItemService.getSaleItem(idSale);
            }
            catch (NotFoundOperationException ex)
            {
                return NotFound(ex.Message); ;
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Something happend: {ex.Message}");
            }
        }

        [HttpPost]
        public ActionResult<saleItemModel> createSale([FromBody] saleItemModel saleModel)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                var url = HttpContext.Request.Host;
                var newSale = _saleItemService.createSale(saleModel);
                //return CreatedAtRoute("salesitems", new { saleId = newSale.idSale }, newSale);
                return Created($"/api/salesitems/{newSale.idSale}", newSale);

            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Something happend: {ex.Message}");
            }
        }


        [HttpDelete("{id:int}")]
        public ActionResult<bool> deleteSale(int id)
        {
            try
            {
                return Ok(_saleItemService.deleteSale(id));
            }
            catch (NotFoundOperationException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        [HttpPut("{id:int}")]
        public ActionResult<bool> updateSale(int id, [FromBody] saleItemModel sale)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    foreach (var pair in ModelState)
                    {
                        if (pair.Key == nameof(sale.nameBuyer) && pair.Value.Errors.Count>0)
                        {
                            return BadRequest(pair.Value.Errors);
                        }
                    }
                }
                return Ok(_saleItemService.updateSale(id, sale));
            }
            catch (NotFoundOperationException ex)
            {
                return NotFound(ex.Message);

            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }

        }
    }
}
