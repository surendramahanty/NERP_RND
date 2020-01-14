using AutoMapper;
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
    public class CivilworksController : BaseController
    {
        private readonly ILogger _logger;
        private readonly IUserService _userService;
        private readonly ICivilworkService _civilworkService;
        private readonly IMapper _mapper;

        public CivilworksController(ICivilworkService civilworkService, IUserService userService, IMapper mapper, ILoggerFactory loggerFactory) : base(userService)
        {
            if (loggerFactory != null)
                _logger = loggerFactory.CreateLogger("CivilworksController");

            _civilworkService = civilworkService;
            _userService = userService;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ResponseMessage> GetCivilwork(string civilworkId)
        {
            try
            {
                var civilwork = await _civilworkService.GetCivilwork(civilworkId);

                return new ResponseMessage { Status = "Ok", Data = civilwork };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error fetching civilwork.");
                return new ResponseMessage { Status = "Error", Message = "Error fetching civilwork." };
            }
        }

        [HttpPost]
        public async Task<PaginationResponse> GetCivilworks([FromBody]PaginationRequest paginationRequest)
        {
            try
            {
                var sortOrder = paginationRequest.Order == null ? SortOrder.Descending : paginationRequest.Order.SortOrder;

                var recordCount = await _civilworkService.GetCivilworksCount(paginationRequest.Filter);
                var civilworks = await _civilworkService.GetCivilworks(paginationRequest.Filter, paginationRequest.Order?.OrderByProperty, sortOrder, paginationRequest.Page, paginationRequest.PageSize);

                return new PaginationResponse
                {
                    Status = "Ok",
                    Data = civilworks,
                    RecordCount = recordCount
                };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error fetching civilworks.");
                return new PaginationResponse { Status = "Error", Message = "Error fetching civilworks." };
            }
        }

        [HttpPost]
        public async Task<ResponseMessage> SaveCivilwork([FromBody]Civilwork civilwork)
        {
            try
            {
                //string loginUserId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

                //var loginUser = await _userService.GetUserByLoginId(loginUserId);

                if (civilwork.Id == null)
                {
                    civilwork.CreatedBy = LoginUser.Name;
                    civilwork.CreatedDate = DateTime.UtcNow;
                }

                civilwork.UpdatedBy = LoginUser.Name;
                civilwork.UpdatedDate = DateTime.UtcNow;


                var savedCivilwork = await _civilworkService.SaveCivilwork(civilwork);

                if (savedCivilwork == null) return new ResponseMessage { Status = "Error", Message = "Error saving civilwork." };

                return new ResponseMessage { Status = "Ok", Data = savedCivilwork };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error saving civilwork.");
                return new ResponseMessage { Status = "Error", Message = "Error saving civilwork." };
            }
        }

        [HttpDelete]
        public async Task<ResponseMessage> DeleteCivilwork(string civilworkId)
        {
            try
            {
                //var searchFilter = new SearchFilter
                //{
                //    Filters = new List<Filter> {
                //        new Filter {
                //            PropertyName = "Civilworks", Operator = Operator.Equals, Value = civilworkId
                //        }
                //    }
                //};

                //var usersCount = await _userService.GetUsersCount(searchFilter);

                //if (usersCount == 0)
                //{
                var status = await _civilworkService.DeleteCivilwork(civilworkId);
                return new ResponseMessage { Status = "Ok", Data = status };
                //}
                //else
                //    return new ResponseMessage { Status = "Error", Message = "Civilwork cannot be deleted as there are users associated with the selected civilwork." };

            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error deleting civilwork.");
                return new ResponseMessage { Status = "Error", Message = "Error deleting civilwork." };
            }
        }
    }
}
