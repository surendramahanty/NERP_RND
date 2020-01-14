using Common.DataAccess.Models;
using Common.Roles;
using Common.Roles.Models;
using Common.Users;
using Common.Web.Filters;
using Common.Web.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace NERP.Admin.Web.Controllers
{
    [Authorize]
    [ServiceFilter(typeof(ActivityLogFilter))]
    public class RolesController : BaseController
    {
        private readonly ILogger _logger;
        private readonly IRoleService _roleService;
        private readonly IUserService _userService;

        public RolesController(IUserService userService, IRoleService roleService, ILogger<RolesController> logger)
            : base(userService)
        {
            _logger = logger;
            _roleService = roleService;
            _userService = userService;
        }

        [HttpPost]
        public async Task<PaginationResponse> GetRoles([FromBody]PaginationRequest paginationRequest)
        {
            try
            {
                var recordCount = await _roleService.GetRolesCount(paginationRequest?.Filter);

                var sortOrder = SortOrder.Descending;

                if (!string.IsNullOrEmpty(paginationRequest?.Order?.OrderByProperty))
                    sortOrder = paginationRequest.Order.SortOrder;

                var roles = await _roleService.GetRoles(paginationRequest?.Filter, paginationRequest?.Order?.OrderByProperty, sortOrder, paginationRequest?.Page, paginationRequest?.PageSize);

                return new PaginationResponse
                {
                    Status = "Ok",
                    Data = roles,
                    RecordCount = recordCount
                };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error fetching roles.");
                return new PaginationResponse { Status = "Error", Message = "Error fetching roles." };
            }

        }

        [HttpGet]
        public async Task<ResponseMessage> GetRole(string roleId)
        {
            try
            {
                var role = await _roleService.GetRole(roleId);

                return new ResponseMessage { Status = "Ok", Data = role };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error fetching role.");
                return new ResponseMessage { Status = "Error", Message = "Error fetching role." };
            }

        }

        [HttpGet]
        public async Task<ResponseMessage> CheckNameExists(string name)
        {
            try
            {
                var id = await _roleService.CheckNameExists(name);

                return new ResponseMessage { Status = "Ok", Data = id };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error checking name.");
                return new ResponseMessage { Status = "Error", Message = "Error checking name." };
            }
        }

        [HttpPost]
        public async Task<ResponseMessage> SaveRole([FromBody]Role role)
        {
            try
            {
                if (role.Id == null)
                {
                    role.CreatedBy = LoginUser.Name;
                    role.CreatedDate = DateTime.UtcNow;
                }

                role.UpdatedBy = LoginUser.Name;
                role.UpdatedDate = DateTime.UtcNow;

                var savedRole = await _roleService.SaveRole(role);

                if (savedRole == null) return new ResponseMessage { Status = "Error", Message = "Error saving role." };

                return new ResponseMessage { Status = "Ok", Data = savedRole };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error saving role.");
                return new ResponseMessage { Status = "Error", Message = "Error saving role." };
            }
        }

        [HttpDelete]
        public async Task<ResponseMessage> DeleteRole(string roleId)
        {
            try
            {
                var searchFilter = new SearchFilter
                {
                    Filters = new List<Filter> {
                        new Filter {
                            PropertyName = "Role", Operator = Operator.Equals, Value = roleId
                        }
                    }
                };

                var usersCount = await _userService.GetUsersCount(searchFilter);

                if (usersCount == 0)
                {
                    var status = await _roleService.DeleteRole(roleId);
                    return new ResponseMessage { Status = "Ok", Data = status };
                }
                else
                    return new ResponseMessage { Status = "Error", Message = "Role cannot be deleted as there are Users associated with the selected Role." };

            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error deleting role.");
                return new ResponseMessage { Status = "Error", Message = "Error deleting role." };
            }
        }
    }
}
