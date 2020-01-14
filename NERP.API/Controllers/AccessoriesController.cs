using AutoMapper;
using Common.DataAccess.Models;
using Common.Users;
using Common.Web.Filters;
using Common.Web.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using NERP.NetworkEntities;
using NERP.NetworkEntities.Models;
using System;
using System.Threading.Tasks;

namespace NERP.API.Controllers
{
    //
    [EnableCors("CorsPolicy")]
    [Authorize]
    [ServiceFilter(typeof(ActivityLogFilter))]
    public class AccessoriesController : BaseController
    {
        private readonly ILogger _logger;
        private readonly IAccessoryService _accessoryService;
        private readonly IMapper _mapper;

        public AccessoriesController(IAccessoryService accessoryService, IUserService userService, IMapper mapper, ILoggerFactory loggerFactory) : base(userService)
        {
            if (loggerFactory != null)
                _logger = loggerFactory.CreateLogger("AccessoriesController");

            _accessoryService = accessoryService;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ResponseMessage> GetAccessory(string accessoryId)
        {
            try
            {
                var accessory = await _accessoryService.GetAccessory(accessoryId);

                return new ResponseMessage { Status = "Ok", Data = accessory };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error fetching accessory.");
                return new ResponseMessage { Status = "Error", Message = "Error fetching accessory." };
            }
        }

        [HttpPost]
        public async Task<PaginationResponse> GetAccessories([FromBody]PaginationRequest paginationRequest)
        {
            try
            {
                var sortOrder = paginationRequest.Order == null ? SortOrder.Descending : paginationRequest.Order.SortOrder;

                var recordCount = await _accessoryService.GetAccessoriesCount(paginationRequest.Filter);
                var accessories = await _accessoryService.GetAccessories(paginationRequest.Filter, paginationRequest.Order?.OrderByProperty, sortOrder, paginationRequest.Page, paginationRequest.PageSize);

                return new PaginationResponse
                {
                    Status = "Ok",
                    Data = accessories,
                    RecordCount = recordCount
                };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error fetching accessories.");
                return new PaginationResponse { Status = "Error", Message = "Error fetching accessories." };
            }
        }

        [HttpPost]
        public async Task<ResponseMessage> SaveAccessory([FromBody]Accessory accessory)
        {
            try
            {
                //string loginUserId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

                //var loginUser = await _userService.GetUserByLoginId(loginUserId);

                if (accessory.Id == null)
                {
                    accessory.CreatedBy = LoginUser.Name;
                    accessory.CreatedDate = DateTime.UtcNow;
                }

                accessory.UpdatedBy = LoginUser.Name;
                accessory.UpdatedDate = DateTime.UtcNow;


                var savedAccessory = await _accessoryService.SaveAccessory(accessory);

                if (savedAccessory == null) return new ResponseMessage { Status = "Error", Message = "Error saving accessory." };

                return new ResponseMessage { Status = "Ok", Data = savedAccessory };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error saving accessory.");
                return new ResponseMessage { Status = "Error", Message = "Error saving accessory." };
            }
        }

        [HttpDelete]
        public async Task<ResponseMessage> DeleteAccessory(string accessoryId)
        {
            try
            {
                //var searchFilter = new SearchFilter
                //{
                //    Filters = new List<Filter> {
                //        new Filter {
                //            PropertyName = "Accessories", Operator = Operator.Equals, Value = accessoryId
                //        }
                //    }
                //};

                //var usersCount = await _userService.GetUsersCount(searchFilter);

                //if (usersCount == 0)
                //{
                var status = await _accessoryService.DeleteAccessory(accessoryId);
                return new ResponseMessage { Status = "Ok", Data = status };
                //}
                //else
                //    return new ResponseMessage { Status = "Error", Message = "Accessory cannot be deleted as there are users associated with the selected accessory." };

            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error deleting accessory.");
                return new ResponseMessage { Status = "Error", Message = "Error deleting accessory." };
            }
        }
    }
}
