using AutoMapper;
using Common.DataAccess.Models;
using Common.Users;
using Common.Web.Filters;
using Common.Web.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using NERP.Common.Models;
using NERP.Homepasses;
using NERP.Homepasses.Model;
using NERP.RND.Web.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace NERP.RND.Web.Controllers
{
    [Authorize]
    [ServiceFilter(typeof(ActivityLogFilter))]
    public class HomepassesController : BaseController
    {
        private readonly ILogger _logger;
        private readonly IHomepassService _homepassService;
        private readonly IClusterService _clusterService;
        private readonly IMapper _mapper;

        public HomepassesController(IHomepassService homepassService, IClusterService clusterService, IUserService userService, IMapper mapper, ILoggerFactory loggerFactory) : base(userService)
        {
            if (loggerFactory != null)
                _logger = loggerFactory.CreateLogger("HomePassesController");

            _homepassService = homepassService;
            _clusterService = clusterService;
            _mapper = mapper;
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
                _logger?.LogError(ex, "Error fetching home pass.");
                return new ResponseMessage { Status = "Error", Message = "Error fetching home pass." };
            }
        }

        [HttpGet]
        public async Task<ResponseMessage> GetHomepassesInCluster(string clusterId)
        {
            try
            {
                var cluster = await _clusterService.GetCluster(clusterId);
                //var homepass = await _homepassService.GetHomepassesInCluster(cluster.Geometry);
                var homepasses = await _homepassService.GetHomepasses(cluster.Homepasses);

                return new ResponseMessage { Status = "Ok", Data = homepasses };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error fetching homepasses.");
                return new ResponseMessage { Status = "Error", Message = "Error fetching homepasses." };
            }
        }

        [HttpPost]
        public async Task<ResponseMessage> GetHomepassesInPolygon([FromBody]Polygon polygon)
        {
            try
            {
                var homepass = await _homepassService.GetHomepassesInCluster(polygon);

                return new ResponseMessage { Status = "Ok", Data = homepass };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error fetching home pass.");
                return new ResponseMessage { Status = "Error", Message = "Error fetching home pass." };
            }
        }

        [HttpPost]
        public async Task<ResponseMessage> GetHomepassesWithinRadius([FromBody]PointsRadiusVm pointsRadiusVm)
        {
            try
            {
                var homepass = await _homepassService.GetPointsWithinRadius(pointsRadiusVm.Center, pointsRadiusVm.Radius);

                return new ResponseMessage { Status = "Ok", Data = homepass };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error fetching home pass.");
                return new ResponseMessage { Status = "Error", Message = "Error fetching home pass." };
            }
        }

        [HttpPost]
        public async Task<PaginationResponse> GetHomepasses([FromBody]PaginationRequest paginationRequest)
        {
            try
            {
                var sortOrder = paginationRequest.Order == null ? SortOrder.Descending : paginationRequest.Order.SortOrder;

                var recordCount = await _homepassService.GetHomepassesCount(paginationRequest.Filter);
                var homepasses = await _homepassService.GetHomepasses(paginationRequest.Filter, paginationRequest.Order?.OrderByProperty, sortOrder, paginationRequest.Page, paginationRequest.PageSize);

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


        [HttpPost]
        public async Task<ResponseMessage> GetHomepassesByIds([FromBody]List<string> homepassIds)
        {
            try
            {
                var homepasses = await _homepassService.GetHomepasses(homepassIds);

                return new ResponseMessage
                {
                    Status = "Ok",
                    Data = homepasses
                };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error fetching homepasses.");
                return new ResponseMessage { Status = "Error", Message = "Error fetching homepasses." };
            }
        }

        [HttpGet]
        public async Task<ResponseMessage> CheckNameExists(string name)
        {
            try
            {
                var id = await _homepassService.CheckNameExists(name);

                return new ResponseMessage { Status = "Ok", Data = id };
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
                //string loginUserId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

                //var loginUser = await _userService.GetUserByLoginId(loginUserId);

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

        [HttpPost]
        public async Task<ResponseMessage> SaveHomepasses([FromBody]List<Homepass> homepasses)
        {
            if (homepasses == null || homepasses.Count == 0)
                return new ResponseMessage { Status = "Error", Message = "No homepasses to save." };

            try
            {
                var errorMessages = new List<string>();

                foreach ( var homepass in homepasses)
                {
                    if (homepass.Id == null)
                    {
                        homepass.CreatedBy = LoginUser.Name;
                        homepass.CreatedDate = DateTime.UtcNow;
                    }

                    homepass.UpdatedBy = LoginUser.Name;
                    homepass.UpdatedDate = DateTime.UtcNow;

                    var savedHomepass = await _homepassService.SaveHomepass(homepass);

                    if (savedHomepass == null)
                        errorMessages.Add($"Unable to save homepass - {homepass.Name}");
                }

                if (errorMessages.Count > 0)
                    return new ResponseMessage { Status = "Error", ErrorData = errorMessages };
                else
                    return new ResponseMessage { Status = "Ok" };

            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error saving homepasses.");
                return new ResponseMessage { Status = "Error", Message = "Error saving homepasses." };
            }
        }

        [HttpDelete]
        public async Task<ResponseMessage> DeleteHomepass(string homepassId)
        {
            try
            {
                //var searchFilter = new SearchFilter
                //{
                //    Filters = new List<Filter> {
                //        new Filter {
                //            PropertyName = "Homepasses", Operator = Operator.Equals, Value = homepassId
                //        }
                //    }
                //};

                //var usersCount = await _homepassService.GetUsersCount(searchFilter);

                //if (usersCount == 0)
                //{
                var status = await _homepassService.DeleteHomepass(homepassId);
                return new ResponseMessage { Status = "Ok", Data = status };
                //}
                //else
                //    return new ResponseMessage { Status = "Error", Message = "HomePass cannot be deleted as there are users associated with the selected homepass." };

            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error deleting homepass.");
                return new ResponseMessage { Status = "Error", Message = "Error deleting homepass." };
            }
        }
    }
}
