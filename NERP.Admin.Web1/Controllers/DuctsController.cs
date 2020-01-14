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
    public class DuctsController : BaseController
    {
        private readonly ILogger _logger;
        private readonly IDuctService _ductService;

        public DuctsController(IUserService userService, IDuctService ductService, ILogger<DuctsController> logger)
            : base(userService)
        {
            _logger = logger;
            _ductService = ductService;
        }

        [HttpPost]
        public async Task<PaginationResponse> GetDucts([FromBody]PaginationRequest paginationRequest)
        {
            try
            {
                var recordCount = await _ductService.GetDuctsCount(paginationRequest?.Filter);

                var sortOrder = SortOrder.Descending;

                if (!string.IsNullOrEmpty(paginationRequest?.Order?.OrderByProperty))
                    sortOrder = paginationRequest.Order.SortOrder;

                var ducts = await _ductService.GetDucts(paginationRequest?.Filter, paginationRequest?.Order?.OrderByProperty, sortOrder, paginationRequest?.Page, paginationRequest?.PageSize);

                return new PaginationResponse
                {
                    Status = "Ok",
                    Data = ducts,
                    RecordCount = recordCount
                };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error fetching ducts.");
                return new PaginationResponse { Status = "Error", Message = "Error fetching ducts." };
            }

        }

        [HttpGet]
        public async Task<ResponseMessage> GetDuct(string ductId)
        {
            try
            {
                var duct = await _ductService.GetDuct(ductId);

                return new ResponseMessage { Status = "Ok", Data = duct };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error fetching duct.");
                return new ResponseMessage { Status = "Error", Message = "Error fetching duct." };
            }

        }

        [HttpGet]
        public async Task<ResponseMessage> CheckNameExists(string name)
        {
            try
            {
                var id = await _ductService.CheckNameExists(name);

                return new ResponseMessage { Status = "Ok", Data = id };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error checking name.");
                return new ResponseMessage { Status = "Error", Message = "Error checking name." };
            }
        }

        [HttpPost]
        public async Task<ResponseMessage> SaveDuct([FromBody]Duct duct)
        {
            try
            {
                if (duct.Id == null)
                {
                    duct.CreatedBy = LoginUser.Name;
                    duct.CreatedDate = DateTime.UtcNow;
                }

                duct.UpdatedBy = LoginUser.Name;
                duct.UpdatedDate = DateTime.UtcNow;

                var savedDuct = await _ductService.SaveDuct(duct);

                if (savedDuct == null) return new ResponseMessage { Status = "Error", Message = "Error saving duct." };

                return new ResponseMessage { Status = "Ok", Data = savedDuct };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error saving duct.");
                return new ResponseMessage { Status = "Error", Message = "Error saving duct." };
            }
        }

        [HttpDelete]
        public async Task<ResponseMessage> DeleteDuct(string ductId)
        {
            try
            {
                var status = await _ductService.DeleteDuct(ductId);
                return new ResponseMessage { Status = "Ok", Data = status };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error deleting duct.");
                return new ResponseMessage { Status = "Error", Message = "Error deleting duct." };
            }
        }
    }
}
