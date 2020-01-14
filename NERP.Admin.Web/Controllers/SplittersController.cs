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
    public class SplittersController : BaseController
    {
        private readonly ILogger _logger;
        private readonly ISplitterService _splitterService;

        public SplittersController(IUserService userService, ISplitterService splitterService, ILogger<SplittersController> logger)
            : base(userService)
        {
            _logger = logger;
            _splitterService = splitterService;
        }

        [HttpPost]
        public async Task<PaginationResponse> GetSplitters([FromBody]PaginationRequest paginationRequest)
        {
            try
            {
                var recordCount = await _splitterService.GetSplittersCount(paginationRequest?.Filter);

                var sortOrder = SortOrder.Descending;

                if (!string.IsNullOrEmpty(paginationRequest?.Order?.OrderByProperty))
                    sortOrder = paginationRequest.Order.SortOrder;

                var splitters = await _splitterService.GetSplitters(paginationRequest?.Filter, paginationRequest?.Order?.OrderByProperty, sortOrder, paginationRequest?.Page, paginationRequest?.PageSize);

                return new PaginationResponse
                {
                    Status = "Ok",
                    Data = splitters,
                    RecordCount = recordCount
                };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error fetching splitters.");
                return new PaginationResponse { Status = "Error", Message = "Error fetching splitters." };
            }

        }

        [HttpGet]
        public async Task<ResponseMessage> GetSplitter(string splitterId)
        {
            try
            {
                var splitter = await _splitterService.GetSplitter(splitterId);

                return new ResponseMessage { Status = "Ok", Data = splitter };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error fetching splitter.");
                return new ResponseMessage { Status = "Error", Message = "Error fetching splitter." };
            }

        }

        [HttpGet]
        public async Task<ResponseMessage> CheckNameExists(string name)
        {
            try
            {
                var id = await _splitterService.CheckNameExists(name);

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
        public async Task<ResponseMessage> SaveSplitter([FromBody]Splitter splitter)
        {
            try
            {
                if (splitter.Id == null)
                {
                    splitter.CreatedBy = LoginUser.Name;
                    splitter.CreatedDate = DateTime.UtcNow;
                }

                splitter.UpdatedBy = LoginUser.Name;
                splitter.UpdatedDate = DateTime.UtcNow;

                var savedSplitter = await _splitterService.SaveSplitter(splitter);

                if (savedSplitter == null) return new ResponseMessage { Status = "Error", Message = "Error saving splitter." };

                return new ResponseMessage { Status = "Ok", Data = savedSplitter };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error saving splitter.");
                return new ResponseMessage { Status = "Error", Message = "Error saving splitter." };
            }
        }

        [HttpDelete]
        public async Task<ResponseMessage> DeleteSplitter(string splitterId)
        {
            try
            {
                var status = await _splitterService.DeleteSplitter(splitterId);
                return new ResponseMessage { Status = "Ok", Data = status };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error deleting splitter.");
                return new ResponseMessage { Status = "Error", Message = "Error deleting splitter." };
            }
        }
    }
}
