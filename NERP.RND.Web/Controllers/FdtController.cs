using Common.DataAccess.Models;
using Common.Users;
using Common.Web.Filters;
using Common.Web.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using NERP.NetworkEntities;
using NERP.NetworkEntities.Models;
using NERP.RND.Web.Controllers;
using System;
using System.Threading.Tasks;

namespace NERP.Admin.Web.Controllers
{
    [Authorize]
    [ServiceFilter(typeof(ActivityLogFilter))]
    public class FdtController : BaseController
    {
        private readonly ILogger _logger;
        private readonly IFdtService _fdtService;

        public FdtController(IUserService userService, IFdtService fdtService, ILogger<FatController> logger)
            : base(userService)
        {
            _logger = logger; 
            _fdtService = fdtService;
        }

        [HttpPost]
        public async Task<PaginationResponse> GetFdts([FromBody]PaginationRequest paginationRequest)
        {
            try
            {
                var recordCount = await _fdtService.GetFdtsCount(paginationRequest?.Filter);

                var sortOrder = SortOrder.Descending;

                if (!string.IsNullOrEmpty(paginationRequest?.Order?.OrderByProperty))
                    sortOrder = paginationRequest.Order.SortOrder;

                var fdts = await _fdtService.GetFdts(paginationRequest?.Filter, paginationRequest?.Order?.OrderByProperty, sortOrder, paginationRequest?.Page, paginationRequest?.PageSize);

                return new PaginationResponse
                {
                    Status = "Ok",
                    Data = fdts,
                    RecordCount = recordCount
                };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error fetching fats.");
                return new PaginationResponse { Status = "Error", Message = "Error fetching fats." };
            }

        }

        [HttpGet]
        public async Task<ResponseMessage> GetFdt(string fdtId)
        {
            try
            {
                var fdtData = await _fdtService.GetFdt(fdtId);

               
                return new ResponseMessage { Status = "Ok", Data = fdtData };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error fetching fdt.");
                return new ResponseMessage { Status = "Error", Message = "Error fetching fdt." };
            }

        }

        [HttpGet]
        public async Task<ResponseMessage> CheckNameExists(string name)
        {
            try
            {
                var id = await _fdtService.CheckNameExists(name);
                var msg = "";
                if (id == null)
                {
                    msg = "true";
                }
                else
                {
                    msg = "false";
                }
                return new ResponseMessage { Status = "Ok", Message = msg };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error checking name.");
                return new ResponseMessage { Status = "Error", Message = "Error checking name." };
            }
        }

        [HttpPost]
        public async Task<ResponseMessage> SaveFdt([FromBody]FDT Fdt)
        {
            try
            {
                if (Fdt.Id == null)
                {
                    Fdt.CreatedBy = LoginUser.Name;
                    Fdt.CreatedDate = DateTime.UtcNow;
                }
               
                Fdt.UpdatedBy = LoginUser.Name;
                Fdt.UpdatedDate = DateTime.UtcNow;

                var savedFdt = await _fdtService.SaveFdt(Fdt);

                if (savedFdt == null) return new ResponseMessage { Status = "Error", Message = "Error saving Fdt." };

                return new ResponseMessage { Status = "Ok", Data = savedFdt };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error saving fdt.");
                return new ResponseMessage { Status = "Error", Message = "Error saving fdt." };
            }
        }

        [HttpDelete]
        public async Task<ResponseMessage> Deletefdt(string fdtId)
        {
            try
            {
                var status = await _fdtService.DeleteFdt(fdtId);
                return new ResponseMessage { Status = "Ok", Data = status };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error deleting fdt.");
                return new ResponseMessage { Status = "Error", Message = "Error deleting fdt." };
            }
        }
    }
}
