using AutoMapper;
using Common.Authentication;
using Common.DataAccess.Models;
using Common.Users;
using Common.Users.Models;
using Common.Web.Filters;
using Common.Web.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace NERP.Admin.Web.Controllers
{
    [Authorize]
    [ServiceFilter(typeof(ActivityLogFilter))]
    public class UsersController : BaseController
    {
        private readonly ILogger _logger;
        private readonly IUserService _userService;
        //private readonly IMapper _mapper;

        public UsersController(IUserService userService, IMapper mapper, ILoggerFactory loggerFactory) : base(userService)
        {
            if (loggerFactory != null)
                _logger = loggerFactory.CreateLogger("UsersController");

            _userService = userService;
			//_mapper = mapper;
        }

        [HttpPost]
        public async Task<PaginationResponse> GetUsers([FromBody]PaginationRequest paginationRequest)
        {
            try
            {
                //SearchFilter searchFilter = null;

                //if (!string.IsNullOrEmpty(listRequest.Filter))
                //{
                //    searchFilter = new SearchFilter
                //    {
                //        ConditionOperator = ConditionOperator.OR,
                //        Filters = new List<Filter>
                //        {
                //            new Filter { PropertyName = "FirstName", Operator = Operator.Contains, Value = filter, CaseSensitive = false },
                //            new Filter { PropertyName = "LastName", Operator = Operator.Contains, Value = filter, CaseSensitive = false },
                //            new Filter { PropertyName = "LoginId", Operator = Operator.Contains, Value = filter, CaseSensitive = false },
                //            new Filter { PropertyName = "EmailId", Operator = Operator.Contains, Value = filter, CaseSensitive = false },
                //        }
                //    };
                //}

                var recordCount = await _userService.GetUsersCount(paginationRequest?.Filter);

                var sortOrder = SortOrder.Descending;

                if (!string.IsNullOrEmpty(paginationRequest?.Order?.OrderByProperty))
                    sortOrder = paginationRequest.Order.SortOrder;

                var users = await _userService.GetUsers(paginationRequest?.Filter, paginationRequest?.Order?.OrderByProperty, sortOrder, paginationRequest?.Page, paginationRequest?.PageSize);

                return new PaginationResponse
                {
                    Status = "Ok",
                    Data = users.Select(x => {
                        x.Password = null;
                        return x;
                    }),
                    RecordCount = recordCount
                };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error fetching users.");
                return new PaginationResponse { Status = "Error", Message = "Error fetching users." };
            }

        }

        [HttpGet]
        public async Task<ResponseMessage> GetUser(string userId)
        {
            try
            {
                var user = await _userService.GetUser(userId);

                return new ResponseMessage { Status = "Ok", Data = user };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error fetching user.");
                return new ResponseMessage { Status = "Error", Message = "Error fetching user." };
            }
        }

        [HttpGet]
        public async Task<ResponseMessage> CheckLoginIdExists(string loginId)
        {
            try
            {
                var id = await _userService.CheckLoginIdExists(loginId);

                return new ResponseMessage { Status = "Ok", Data = id };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error checking Login Id.");
                return new ResponseMessage { Status = "Error", Message = "Error checking Login Id." };
            }
        }

        [HttpPost]
        public async Task<ResponseMessage> SaveUser([FromBody]User user)
        {

            try
            {
                if (user.Id == null)
                {
                    user.CreatedBy = LoginUser.Name;
                    user.CreatedDate = DateTime.UtcNow;

                    if (!string.IsNullOrEmpty(user.Password.Trim()))
                        user.Password = SecurityManager.GenerateHash(user.Password.Trim());
                }
                else
                {
                    var tempUser = await _userService.GetUser(user.Id);

                    if (tempUser != null)
                    {
                        if (user.Password != tempUser.Password)
                            user.Password = SecurityManager.GenerateHash(user.Password.Trim());
                    }   
                    else
                        return new ResponseMessage { Status = "Error", Message = "User doesn't exist." };
                }

                user.UpdatedBy = LoginUser.Name;
                user.UpdatedDate = DateTime.UtcNow;

                var savedUser = await _userService.SaveUser(user);

                if (savedUser == null) return new ResponseMessage { Status = "Error", Message = "Error saving user." };

                return new ResponseMessage { Status = "Ok", Data = savedUser };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error saving user.");
                return new ResponseMessage { Status = "Error", Message = "Error saving user." };
            }
        }

        [HttpDelete]
        public async Task<ResponseMessage> DeleteUser(string userId)
        {
            try
            {
                var response = await _userService.DeleteUser(userId);

                return new ResponseMessage { Status = "Ok", Data = response };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error deleting user.");
                return new ResponseMessage { Status = "Error", Message = "Error deleting user." };
            }
        }
    }
}
