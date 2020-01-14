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

namespace NERP.RND.Web.Controllers
{
    [Authorize]
    [ServiceFilter(typeof(ActivityLogFilter))]
    public class SpliceClosuresController : BaseController
    {
        private readonly ILogger _logger;
        private readonly ISpliceClosureService _spliceClosureService;

        public SpliceClosuresController(IUserService userService, ISpliceClosureService spliceClosureService, ILogger<SpliceClosuresController> logger)
            : base(userService)
        {
            _logger = logger;
            _spliceClosureService = spliceClosureService;
        }

        [HttpPost]
        public async Task<PaginationResponse> GetSpliceClosures([FromBody]PaginationRequest paginationRequest)
        {
            try
            {
                var recordCount = await _spliceClosureService.GetSpliceClosuresCount(paginationRequest?.Filter);

                var sortOrder = SortOrder.Descending;

                if (!string.IsNullOrEmpty(paginationRequest?.Order?.OrderByProperty))
                    sortOrder = paginationRequest.Order.SortOrder;

                var spliceClosures = await _spliceClosureService.GetSpliceClosures(paginationRequest?.Filter, paginationRequest?.Order?.OrderByProperty, sortOrder, paginationRequest?.Page, paginationRequest?.PageSize);

                return new PaginationResponse
                {
                    Status = "Ok",
                    Data = spliceClosures,
                    RecordCount = recordCount
                };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error fetching spliceClosures.");
                return new PaginationResponse { Status = "Error", Message = "Error fetching spliceClosures." };
            }

        }

        [HttpGet]
        public async Task<ResponseMessage> GetSpliceClosure(string spliceClosureId)
        {
            try
            {
                var spliceClosure = await _spliceClosureService.GetSpliceClosure(spliceClosureId);

                return new ResponseMessage { Status = "Ok", Data = spliceClosure };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error fetching spliceClosure.");
                return new ResponseMessage { Status = "Error", Message = "Error fetching spliceClosure." };
            }

        }

        [HttpGet]
        public async Task<ResponseMessage> CheckNameExists(string name)
        {
            try
            {
                var id = await _spliceClosureService.CheckNameExists(name);

                return new ResponseMessage { Status = "Ok", Data = id };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error checking name.");
                return new ResponseMessage { Status = "Error", Message = "Error checking name." };
            }
        }

        [HttpPost]
        public async Task<ResponseMessage> SaveSpliceClosure([FromBody]SpliceClosure spliceClosure)
        {
            try
            {
                if (spliceClosure.Id == null)
                {
                    spliceClosure.CreatedBy = LoginUser.Name;
                    spliceClosure.CreatedDate = DateTime.UtcNow;
                }

                spliceClosure.UpdatedBy = LoginUser.Name;
                spliceClosure.UpdatedDate = DateTime.UtcNow;

                var savedSpliceClosure = await _spliceClosureService.SaveSpliceClosure(spliceClosure);

                if (savedSpliceClosure == null) return new ResponseMessage { Status = "Error", Message = "Error saving spliceClosure." };

                return new ResponseMessage { Status = "Ok", Data = savedSpliceClosure };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error saving spliceClosure.");
                return new ResponseMessage { Status = "Error", Message = "Error saving spliceClosure." };
            }
        }

        [HttpDelete]
        public async Task<ResponseMessage> DeleteSpliceClosure(string spliceClosureId)
        {
            try
            {
                var status = await _spliceClosureService.DeleteSpliceClosure(spliceClosureId);
                return new ResponseMessage { Status = "Ok", Data = status };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error deleting spliceClosure.");
                return new ResponseMessage { Status = "Error", Message = "Error deleting spliceClosure." };
            }
        }
    }
}
