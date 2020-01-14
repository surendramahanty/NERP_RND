using Common.DataAccess.Models;
using Common.Users;
using Common.Web.Filters;
using Common.Web.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using NERP.NetworkEntities;
using NERP.NetworkEntities.Models;
using System;
using System.Threading.Tasks;

namespace NERP.Admin.Web.Controllers
{
    [Authorize]
    [ServiceFilter(typeof(ActivityLogFilter))]
    public class ChambersController : BaseController
    {
        private readonly ILogger _logger;
        private readonly IChamberService _chamberService;

        public ChambersController(IUserService userService, IChamberService chamberService, ILogger<ChambersController> logger)
            : base(userService)
        {
            _logger = logger;
            _chamberService = chamberService;
        }

        [HttpPost]
        public async Task<PaginationResponse> GetChambers([FromBody]PaginationRequest paginationRequest)
        {
            try
            {
                var recordCount = await _chamberService.GetChambersCount(paginationRequest?.Filter);

                var sortOrder = SortOrder.Descending;

                if (!string.IsNullOrEmpty(paginationRequest?.Order?.OrderByProperty))
                    sortOrder = paginationRequest.Order.SortOrder;

                var chambers = await _chamberService.GetChambers(paginationRequest?.Filter, paginationRequest?.Order?.OrderByProperty, sortOrder, paginationRequest?.Page, paginationRequest?.PageSize);

                return new PaginationResponse
                {
                    Status = "Ok",
                    Data = chambers,
                    RecordCount = recordCount
                };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error fetching chambers.");
                return new PaginationResponse { Status = "Error", Message = "Error fetching chambers." };
            }

        }

        [HttpGet]
        public async Task<ResponseMessage> GetChamber(string chamberId)
        {
            try
            {
                var chamber = await _chamberService.GetChamber(chamberId);

                return new ResponseMessage { Status = "Ok", Data = chamber };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error fetching chamber.");
                return new ResponseMessage { Status = "Error", Message = "Error fetching chamber." };
            }

        }

        [HttpGet]
        public async Task<ResponseMessage> CheckNameExists(string name)
        {
            try
            {
                var id = await _chamberService.CheckNameExists(name);

                return new ResponseMessage { Status = "Ok", Data = id };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error checking name.");
                return new ResponseMessage { Status = "Error", Message = "Error checking name." };
            }
        }

        [HttpPost]
        public async Task<ResponseMessage> SaveChamber([FromBody]Chamber chamber)
        {
            try
            {
                if (chamber.Id == null)
                {
                    chamber.CreatedBy = LoginUser.Name;
                    chamber.CreatedDate = DateTime.UtcNow;
                }

                chamber.UpdatedBy = LoginUser.Name;
                chamber.UpdatedDate = DateTime.UtcNow;

                var savedChamber = await _chamberService.SaveChamber(chamber);

                if (savedChamber == null) return new ResponseMessage { Status = "Error", Message = "Error saving chamber." };

                return new ResponseMessage { Status = "Ok", Data = savedChamber };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error saving chamber.");
                return new ResponseMessage { Status = "Error", Message = "Error saving chamber." };
            }
        }

        [HttpDelete]
        public async Task<ResponseMessage> DeleteChamber(string chamberId)
        {
            try
            {
                var status = await _chamberService.DeleteChamber(chamberId);
                return new ResponseMessage { Status = "Ok", Data = status };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error deleting chamber.");
                return new ResponseMessage { Status = "Error", Message = "Error deleting chamber." };
            }
        }
    }
}
