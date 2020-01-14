using AutoMapper;
using Common.DataAccess.Models;
using Common.Groups;
using Common.Groups.Models;
using Common.Users;
using Common.Web.Filters;
using Common.Web.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;

namespace NERP.Admin.Web.Controllers
{
    [Authorize]
    [ServiceFilter(typeof(ActivityLogFilter))]
    public class GroupsController : BaseController
    {
        private readonly ILogger _logger;
        private readonly IUserService _userService;
        private readonly IGroupService _groupService;
        private readonly IMapper _mapper;

        public GroupsController(IGroupService groupService, IUserService userService, IMapper mapper, ILoggerFactory loggerFactory) : base(userService)
        {
            if (loggerFactory != null)
                _logger = loggerFactory.CreateLogger("GroupsController");

            _groupService = groupService;
            _userService = userService;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ResponseMessage> GetGroup(string groupId)
        {
            try
            {
                var group = await _groupService.GetGroup(groupId);

                return new ResponseMessage { Status = "Ok", Data = group };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error fetching group.");
                return new ResponseMessage { Status = "Error", Message = "Error fetching group." };
            }
        }

        [HttpPost]
        public async Task<PaginationResponse> GetGroups([FromBody]PaginationRequest paginationRequest)
        {
            try
            {
                var sortOrder = paginationRequest.Order == null ? SortOrder.Descending : paginationRequest.Order.SortOrder;

                var recordCount = await _groupService.GetGroupsCount(paginationRequest.Filter);
                var groups = await _groupService.GetGroups(paginationRequest.Filter, paginationRequest.Order?.OrderByProperty, sortOrder, paginationRequest.Page, paginationRequest.PageSize);

                return new PaginationResponse
                {
                    Status = "Ok",
                    Data = groups,
                    RecordCount = recordCount
                };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error fetching groups.");
                return new PaginationResponse { Status = "Error", Message = "Error fetching groups." };
            }
        }

        [HttpGet]
        public async Task<ResponseMessage> CheckNameExists(string name)
        {
            try
            {
                var id = await _groupService.CheckNameExists(name);

                return new ResponseMessage { Status = "Ok", Data = id };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error checking name.");
                return new ResponseMessage { Status = "Error", Message = "Error checking name." };
            }
        }

        [HttpPost]
        public async Task<ResponseMessage> SaveGroup([FromBody]Group group)
        {
            try
            {
                //string loginUserId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

                //var loginUser = await _userService.GetUserByLoginId(loginUserId);

                if (group.Id == null)
                {
                    group.CreatedBy = LoginUser.Name;
                    group.CreatedDate = DateTime.UtcNow;
                }

                group.UpdatedBy = LoginUser.Name;
                group.UpdatedDate = DateTime.UtcNow;


                var savedGroup = await _groupService.SaveGroup(group);

                if (savedGroup == null) return new ResponseMessage { Status = "Error", Message = "Error saving group." };

                return new ResponseMessage { Status = "Ok", Data = savedGroup };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error saving group.");
                return new ResponseMessage { Status = "Error", Message = "Error saving group." };
            }
        }

        [HttpDelete]
        public async Task<ResponseMessage> DeleteGroup(string groupId)
        {
            try
            {
                //var searchFilter = new SearchFilter
                //{
                //    Filters = new List<Filter> {
                //        new Filter {
                //            PropertyName = "Groups", Operator = Operator.Equals, Value = groupId
                //        }
                //    }
                //};

                //var usersCount = await _userService.GetUsersCount(searchFilter);

                //if (usersCount == 0)
                //{
                var status = await _groupService.DeleteGroup(groupId);
                return new ResponseMessage { Status = "Ok", Data = status };
                //}
                //else
                //    return new ResponseMessage { Status = "Error", Message = "Group cannot be deleted as there are users associated with the selected group." };

            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error deleting group.");
                return new ResponseMessage { Status = "Error", Message = "Error deleting group." };
            }
        }
    }
}
