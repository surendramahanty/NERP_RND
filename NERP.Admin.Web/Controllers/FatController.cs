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
    public class FatController : BaseController
    {
        private readonly ILogger _logger;
        private readonly IFatService _fatService;

        public FatController(IUserService userService, IFatService fatService, ILogger<FatController> logger)
            : base(userService)
        {
            _logger = logger;
            _fatService = fatService;
        }

        [HttpPost]
        public async Task<PaginationResponse> GetFatAll([FromBody]PaginationRequest paginationRequest)
        {
            try
            {
                var recordCount = await _fatService.GetFatsCount(paginationRequest?.Filter);

                var sortOrder = SortOrder.Descending;

                if (!string.IsNullOrEmpty(paginationRequest?.Order?.OrderByProperty))
                    sortOrder = paginationRequest.Order.SortOrder;

                var fats = await _fatService.GetFats(paginationRequest?.Filter, paginationRequest?.Order?.OrderByProperty, sortOrder, paginationRequest?.Page, paginationRequest?.PageSize);

                return new PaginationResponse
                {
                    Status = "Ok",
                    Data = fats,
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
        public async Task<ResponseMessage> GetFat(string fatId)
        {
            try
            {
                var fat = await _fatService.GetFat(fatId);

               
                return new ResponseMessage { Status = "Ok", Data = fat };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error fetching fat.");
                return new ResponseMessage { Status = "Error", Message = "Error fetching fat." };
            }

        }

        [HttpGet]
        public async Task<ResponseMessage> CheckNameExists(string name)
        {
            try
            {
                var id = await _fatService.CheckNameExists(name);
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
        public async Task<ResponseMessage> SaveFat([FromBody]FAT fat)
        {
            try
            {
                if (fat.Id == null)
                {
                    fat.CreatedBy = LoginUser.Name;
                    fat.CreatedDate = DateTime.UtcNow;
                }
                foreach (var item in fat.Template)
                {
                    item.UpdatedDate = DateTime.UtcNow;
                }
                fat.UpdatedBy = LoginUser.Name;
                fat.UpdatedDate = DateTime.UtcNow;

                var savedFat = await _fatService.SaveFat(fat);

                if (savedFat == null) return new ResponseMessage { Status = "Error", Message = "Error saving Fat." };

                return new ResponseMessage { Status = "Ok", Data = savedFat };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error saving fat.");
                return new ResponseMessage { Status = "Error", Message = "Error saving fat." };
            }
        }

        [HttpDelete]
        public async Task<ResponseMessage> Deletefat(string fatId)
        {
            try
            {
                var status = await _fatService.DeleteFat(fatId);
                return new ResponseMessage { Status = "Ok", Data = status };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error deleting fat.");
                return new ResponseMessage { Status = "Error", Message = "Error deleting fat." };
            }
        }
    }
}
