using AutoMapper;
using Common.DataAccess.Models;
using Common.Users;
using Common.Web.Filters;
using Common.Web.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using NERP.Designs;
using NERP.Designs.Models;
using System;
using System.Threading.Tasks;

namespace NERP.API.Controllers
{
    [Authorize]
    [ServiceFilter(typeof(ActivityLogFilter))]
    public class DesignsController : BaseController
    {
        private readonly ILogger _logger;
        private readonly IDesignService _designService;
        private readonly IMapper _mapper;

        public DesignsController(IDesignService designService, IUserService userService, IMapper mapper, ILoggerFactory loggerFactory) : base(userService)
        {
            if (loggerFactory != null)
                _logger = loggerFactory.CreateLogger("HomePassesController");

            _designService = designService;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ResponseMessage> GetDesign(string designId)
        {
            try
            {
                var design = await _designService.GetDesign(designId);

                return new ResponseMessage { Status = "Ok", Data = design };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error fetching design.");
                return new ResponseMessage { Status = "Error", Message = "Error fetching design." };
            }
        }

        [HttpPost]
        public async Task<PaginationResponse> GetDesigns([FromBody]PaginationRequest paginationRequest)
        {
            try
            {
                var sortOrder = paginationRequest.Order == null ? SortOrder.Descending : paginationRequest.Order.SortOrder;

                var recordCount = await _designService.GetDesignsCount(paginationRequest.Filter);
                var designs = await _designService.GetDesigns(paginationRequest.Filter, paginationRequest.Order?.OrderByProperty, sortOrder, paginationRequest.Page, paginationRequest.PageSize);

                return new PaginationResponse
                {
                    Status = "Ok",
                    Data = designs,
                    RecordCount = recordCount
                };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error fetching designs.");
                return new PaginationResponse { Status = "Error", Message = "Error fetching designs." };
            }
        }

        [HttpPost]
        public async Task<ResponseMessage> SaveDesign([FromBody]Design design)
        {
            try
            {
                //string loginUserId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

                //var loginUser = await _userService.GetUserByLoginId(loginUserId);

                if (design.Id == null)
                {
                    if (string.IsNullOrEmpty(design.ReferenceId))
                        design.ReferenceId = Guid.NewGuid().ToString();

                    design.CreatedBy = LoginUser.Name;
                    design.CreatedDate = DateTime.UtcNow;
                }

                design.UpdatedBy = LoginUser.Name;
                design.UpdatedDate = DateTime.UtcNow;


                var savedDesign = await _designService.SaveDesign(design);

                if (savedDesign == null) return new ResponseMessage { Status = "Error", Message = "Error saving design." };

                return new ResponseMessage { Status = "Ok", Data = savedDesign };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error saving design.");
                return new ResponseMessage { Status = "Error", Message = "Error saving design." };
            }
        }

        [HttpDelete]
        public async Task<ResponseMessage> DeleteDesign(string designId)
        {
            try
            {
                //var searchFilter = new SearchFilter
                //{
                //    Filters = new List<Filter> {
                //        new Filter {
                //            PropertyName = "Designs", Operator = Operator.Equals, Value = designId
                //        }
                //    }
                //};

                //var usersCount = await _designService.GetUsersCount(searchFilter);

                //if (usersCount == 0)
                //{
                var status = await _designService.DeleteDesign(designId);
                return new ResponseMessage { Status = "Ok", Data = status };
                //}
                //else
                //    return new ResponseMessage { Status = "Error", Message = "HomePass cannot be deleted as there are users associated with the selected design." };

            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error deleting design.");
                return new ResponseMessage { Status = "Error", Message = "Error deleting design." };
            }
        }
    }
}
