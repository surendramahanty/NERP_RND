using AutoMapper;
using Common.DataAccess.Models;
using Common.Users;
using Common.Web.Filters;
using Common.Web.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using NERP.Homepasses;
using NERP.Homepasses.Model;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace NERP.API.Controllers
{
    [Authorize]
    [ServiceFilter(typeof(ActivityLogFilter))]
    public class ClustersController : BaseController
    {
        private readonly ILogger _logger;
        private readonly IClusterService _clusterService;
        private readonly IMapper _mapper;

        public ClustersController(IClusterService clusterService, IUserService userService, IMapper mapper, ILoggerFactory loggerFactory) : base(userService)
        {
            if (loggerFactory != null)
                _logger = loggerFactory.CreateLogger("HomePassesController");

            _clusterService = clusterService;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ResponseMessage> GetCluster(string clusterId)
        {
            try
            {
                var cluster = await _clusterService.GetCluster(clusterId);

                return new ResponseMessage { Status = "Ok", Data = cluster };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error fetching cluster.");
                return new ResponseMessage { Status = "Error", Message = "Error fetching cluster." };
            }
        }

        [HttpPost]
        public async Task<PaginationResponse> GetClusters([FromBody]PaginationRequest paginationRequest)
        {
            try
            {
                var sortOrder = paginationRequest.Order == null ? SortOrder.Descending : paginationRequest.Order.SortOrder;

                var recordCount = await _clusterService.GetClustersCount(paginationRequest.Filter);
                var clusters = await _clusterService.GetClusters(paginationRequest.Filter, paginationRequest.Order?.OrderByProperty, sortOrder, paginationRequest.Page, paginationRequest.PageSize);

                return new PaginationResponse
                {
                    Status = "Ok",
                    Data = clusters,
                    RecordCount = recordCount
                };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error fetching clusters.");
                return new PaginationResponse { Status = "Error", Message = "Error fetching clusters." };
            }
        }

        [HttpPost]
        public async Task<ResponseMessage> SaveCluster([FromBody]Cluster cluster)
        {
            try
            {
                //string loginUserId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

                //var loginUser = await _userService.GetUserByLoginId(loginUserId);

                if (cluster.Id == null)
                {
                    cluster.CreatedBy = LoginUser.Name;
                    cluster.CreatedDate = DateTime.UtcNow;
                }

                cluster.UpdatedBy = LoginUser.Name;
                cluster.UpdatedDate = DateTime.UtcNow;


                var savedCluster = await _clusterService.SaveCluster(cluster);

                if (savedCluster == null) return new ResponseMessage { Status = "Error", Message = "Error saving cluster." };

                return new ResponseMessage { Status = "Ok", Data = savedCluster };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error saving cluster.");
                return new ResponseMessage { Status = "Error", Message = "Error saving cluster." };
            }
        }

        [HttpPost]
        public async Task<ResponseMessage> SaveClusters([FromBody]List<Cluster> clusters)
        {
            if (clusters == null || clusters.Count == 0)
                return new ResponseMessage { Status = "Error", Message = "No clusters to save." };

            try
            {
                var errorMessages = new List<string>();

                foreach (var cluster in clusters)
                {
                    if (cluster.Id == null)
                    {
                        cluster.CreatedBy = LoginUser.Name;
                        cluster.CreatedDate = DateTime.UtcNow;
                    }

                    cluster.UpdatedBy = LoginUser.Name;
                    cluster.UpdatedDate = DateTime.UtcNow;

                    var savedCluster = await _clusterService.SaveCluster(cluster);

                    if (savedCluster == null)
                        errorMessages.Add($"Unable to save cluster - {cluster.Name}");
                }

                if (errorMessages.Count > 0)
                    return new ResponseMessage { Status = "Error", ErrorData = errorMessages };
                else
                    return new ResponseMessage { Status = "Ok" };

            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error saving clusters.");
                return new ResponseMessage { Status = "Error", Message = "Error saving clusters." };
            }
        }


        [HttpDelete]
        public async Task<ResponseMessage> DeleteCluster(string clusterId)
        {
            try
            {
                //var searchFilter = new SearchFilter
                //{
                //    Filters = new List<Filter> {
                //        new Filter {
                //            PropertyName = "Clusters", Operator = Operator.Equals, Value = clusterId
                //        }
                //    }
                //};

                //var usersCount = await _clusterService.GetUsersCount(searchFilter);

                //if (usersCount == 0)
                //{
                var status = await _clusterService.DeleteCluster(clusterId);
                return new ResponseMessage { Status = "Ok", Data = status };
                //}
                //else
                //    return new ResponseMessage { Status = "Error", Message = "HomePass cannot be deleted as there are users associated with the selected cluster." };

            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error deleting cluster.");
                return new ResponseMessage { Status = "Error", Message = "Error deleting cluster." };
            }
        }
    }
}
