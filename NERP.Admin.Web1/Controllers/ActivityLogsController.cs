using AutoMapper;
using Common.ActivityLogs;
using Common.DataAccess.Models;
using Common.Users;
using Common.Web.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;

namespace NERP.Admin.Web.Controllers
{
    public class ActivityLogsController : BaseController
    {
        private readonly ILogger _logger;
        private readonly IActivityLogService _activityLogService;
        private readonly IMapper _mapper;

        public ActivityLogsController(IActivityLogService activityLogService, IUserService userService, IMapper mapper, ILoggerFactory loggerFactory) : base(userService)
        {
            if (loggerFactory != null)
                _logger = loggerFactory.CreateLogger("GroupsController");

            _activityLogService = activityLogService;
            _mapper = mapper;
        }

        [HttpPost]
        public async Task<PaginationResponse> GetActivityLogs([FromBody]PaginationRequest paginationRequest)
        {
            try
            {
                var sortOrder = paginationRequest.Order == null ? SortOrder.Descending : paginationRequest.Order.SortOrder;

                var recordCount = await _activityLogService.GetActivityLogsCount(paginationRequest.Filter);
                var activityLogs = await _activityLogService.GetActivityLogs(paginationRequest.Filter, paginationRequest.Order?.OrderByProperty, sortOrder, paginationRequest.Page, paginationRequest.PageSize);

                return new PaginationResponse
                {
                    Status = "Ok",
                    Data = activityLogs,
                    RecordCount = recordCount
                };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error fetching activity logs.");
                return new PaginationResponse { Status = "Error", Message = "Error fetching activity logs." };
            }
        }

        [HttpGet]
        public async Task<ResponseMessage> GetActivityLog(string activityLogId)
        {
            try
            {
                var activityLog = await _activityLogService.GetActivityLog(activityLogId);

                return new ResponseMessage { Status = "Ok", Data = activityLog };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error fetching activity Log.");
                return new ResponseMessage { Status = "Error", Message = "Error fetching activity Log." };
            }

        }

    }
}
