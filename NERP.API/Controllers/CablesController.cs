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

namespace NERP.API.Controllers
{
    [Authorize]
    [ServiceFilter(typeof(ActivityLogFilter))]
    public class CablesController : BaseController
    {
        private readonly ILogger _logger;
        private readonly ICableService _cableService;

        public CablesController(IUserService userService, ICableService cableService, ILogger<CablesController> logger)
            : base(userService)
        {
            _logger = logger;
            _cableService = cableService;
        }

        [HttpPost]
        public async Task<PaginationResponse> GetCables([FromBody]PaginationRequest paginationRequest)
        {
            try
            {
                var recordCount = await _cableService.GetCablesCount(paginationRequest?.Filter);

                var sortOrder = SortOrder.Descending;

                if (!string.IsNullOrEmpty(paginationRequest?.Order?.OrderByProperty))
                    sortOrder = paginationRequest.Order.SortOrder;

                var cables = await _cableService.GetCables(paginationRequest?.Filter, paginationRequest?.Order?.OrderByProperty, sortOrder, paginationRequest?.Page, paginationRequest?.PageSize);

                return new PaginationResponse
                {
                    Status = "Ok",
                    Data = cables,
                    RecordCount = recordCount
                };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error fetching cables.");
                return new PaginationResponse { Status = "Error", Message = "Error fetching cables." };
            }

        }

        [HttpGet]
        public async Task<ResponseMessage> GetCable(string cableId)
        {
            try
            {
                var cable = await _cableService.GetCable(cableId);

                return new ResponseMessage { Status = "Ok", Data = cable };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error fetching cable.");
                return new ResponseMessage { Status = "Error", Message = "Error fetching cable." };
            }

        }

        [HttpPost]
        public async Task<ResponseMessage> SaveCable([FromBody]Cable cable)
        {
            if (cable == null) return new ResponseMessage { Status = "Error", Message = "Cable cannot be empty." };

            try
            {
                if (cable.Id == null)
                {
                    cable.CreatedBy = LoginUser.Name;
                    cable.CreatedDate = DateTime.UtcNow;
                }

                cable.UpdatedBy = LoginUser.Name;
                cable.UpdatedDate = DateTime.UtcNow;

                var savedCable = await _cableService.SaveCable(cable);

                if (savedCable == null) return new ResponseMessage { Status = "Error", Message = "Error saving cable." };

                return new ResponseMessage { Status = "Ok", Data = savedCable };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error saving cable.");
                return new ResponseMessage { Status = "Error", Message = "Error saving cable." };
            }
        }

        [HttpDelete]
        public async Task<ResponseMessage> DeleteCable(string cableId)
        {
            try
            {
                var status = await _cableService.DeleteCable(cableId);
                return new ResponseMessage { Status = "Ok", Data = status };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error deleting cable.");
                return new ResponseMessage { Status = "Error", Message = "Error deleting cable." };
            }
        }
    }
}
