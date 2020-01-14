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
    public class HomepassesController : BaseController
    {
        private readonly ILogger _logger;
        private readonly IHomepassService _homepassService;

        public HomepassesController(IUserService userService, IHomepassService homepassService, ILogger<HomepassesController> logger)
            : base(userService)
        {
            _logger = logger;
            _homepassService = homepassService;
        }

        [HttpPost]
        public async Task<PaginationResponse> GetHomepasses([FromBody]PaginationRequest paginationRequest)
        {
            try
            {
                var recordCount = await _homepassService.GetHomepassesCount(paginationRequest?.Filter);

                var sortOrder = SortOrder.Descending;

                if (!string.IsNullOrEmpty(paginationRequest?.Order?.OrderByProperty))
                    sortOrder = paginationRequest.Order.SortOrder;

                var homepasses = await _homepassService.GetHomepasses(paginationRequest?.Filter, paginationRequest?.Order?.OrderByProperty, sortOrder, paginationRequest?.Page, paginationRequest?.PageSize);

                return new PaginationResponse
                {
                    Status = "Ok",
                    Data = homepasses,
                    RecordCount = recordCount
                };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error fetching homepasses.");
                return new PaginationResponse { Status = "Error", Message = "Error fetching homepasses." };
            }

        }

        [HttpGet]
        public async Task<ResponseMessage> GetHomepass(string homepassId)
        {
            try
            {
                var homepass = await _homepassService.GetHomepass(homepassId);

                return new ResponseMessage { Status = "Ok", Data = homepass };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error fetching homepass.");
                return new ResponseMessage { Status = "Error", Message = "Error fetching homepass." };
            }

        }

        [HttpGet]
        public async Task<ResponseMessage> CheckNameExists(string name)
        {
            try
            {
                var id = await _homepassService.CheckNameExists(name);

                var msg = "";
                if (id == null)
                {
                    msg = "true";
                }
                else
                {
                    msg = "false";
                }
                return new ResponseMessage { Status = "Ok" ,Message=msg };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error checking name.");
                return new ResponseMessage { Status = "Error", Message = "Error checking name." };
            }
        }

        [HttpPost]
        public async Task<ResponseMessage> SaveHomepass([FromBody]Homepass homepass)
        {
            try
            {
                if (homepass.Id == null)
                {
                    homepass.CreatedBy = LoginUser.Name;
                    homepass.CreatedDate = DateTime.UtcNow;
                }

                homepass.UpdatedBy = LoginUser.Name;
                homepass.UpdatedDate = DateTime.UtcNow;

                var savedHomepass = await _homepassService.SaveHomepass(homepass);

                if (savedHomepass == null) return new ResponseMessage { Status = "Error", Message = "Error saving homepass." };

                return new ResponseMessage { Status = "Ok", Data = savedHomepass };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error saving homepass.");
                return new ResponseMessage { Status = "Error", Message = "Error saving homepass." };
            }
        }

        [HttpDelete]
        public async Task<ResponseMessage> DeleteHomepass(string homepassId)
        {
            try
            {
                var status = await _homepassService.DeleteHomepass(homepassId);
                return new ResponseMessage { Status = "Ok", Data = status };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error deleting homepass.");
                return new ResponseMessage { Status = "Error", Message = "Error deleting homepass." };
            }
        }
    }
}
