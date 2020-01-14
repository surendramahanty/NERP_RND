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
    public class ODFsController : BaseController
    {
        private readonly ILogger _logger;
        private readonly IODFService _odfService;

        public ODFsController(IUserService userService, IODFService odfService, ILogger<ODFsController> logger)
            : base(userService)
        {
            _logger = logger;
            _odfService = odfService;
        }

        [HttpPost]
        public async Task<PaginationResponse> GetODFs([FromBody]PaginationRequest paginationRequest)
        {
            try
            {
                var recordCount = await _odfService.GetODFsCount(paginationRequest?.Filter);

                var sortOrder = SortOrder.Descending;

                if (!string.IsNullOrEmpty(paginationRequest?.Order?.OrderByProperty))
                    sortOrder = paginationRequest.Order.SortOrder;

                var odfs = await _odfService.GetODFs(paginationRequest?.Filter, paginationRequest?.Order?.OrderByProperty, sortOrder, paginationRequest?.Page, paginationRequest?.PageSize);

                return new PaginationResponse
                {
                    Status = "Ok",
                    Data = odfs,
                    RecordCount = recordCount
                };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error fetching odfs.");
                return new PaginationResponse { Status = "Error", Message = "Error fetching odfs." };
            }

        }

        [HttpGet]
        public async Task<ResponseMessage> GetODF(string odfId)
        {
            try
            {
                var odf = await _odfService.GetODF(odfId);

                return new ResponseMessage { Status = "Ok", Data = odf };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error fetching odf.");
                return new ResponseMessage { Status = "Error", Message = "Error fetching odf." };
            }

        }

        [HttpGet]
        public async Task<ResponseMessage> CheckNameExists(string name)
        {
            try
            {
                var id = await _odfService.CheckNameExists(name);

                return new ResponseMessage { Status = "Ok", Data = id };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error checking name.");
                return new ResponseMessage { Status = "Error", Message = "Error checking name." };
            }
        }

        [HttpPost]
        public async Task<ResponseMessage> SaveODF([FromBody]ODF odf)
        {
            try
            {
                if (odf.Id == null)
                {
                    odf.CreatedBy = LoginUser.Name;
                    odf.CreatedDate = DateTime.UtcNow;
                }

                odf.UpdatedBy = LoginUser.Name;
                odf.UpdatedDate = DateTime.UtcNow;

                var savedODF = await _odfService.SaveODF(odf);

                if (savedODF == null) return new ResponseMessage { Status = "Error", Message = "Error saving odf." };

                return new ResponseMessage { Status = "Ok", Data = savedODF };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error saving odf.");
                return new ResponseMessage { Status = "Error", Message = "Error saving odf." };
            }
        }

        [HttpDelete]
        public async Task<ResponseMessage> DeleteODF(string odfId)
        {
            try
            {
                var status = await _odfService.DeleteODF(odfId);
                return new ResponseMessage { Status = "Ok", Data = status };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error deleting odf.");
                return new ResponseMessage { Status = "Error", Message = "Error deleting odf." };
            }
        }
    }
}
