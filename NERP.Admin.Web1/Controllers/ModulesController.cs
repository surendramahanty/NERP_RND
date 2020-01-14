using Common.DataAccess.Models;
using Common.Modules;
using Common.Modules.Models;
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
    public class ModulesController : BaseController
    {
        private readonly ILogger _logger;
        private readonly IModuleService _moduleService;

        public ModulesController(IUserService userService, IModuleService moduleService, ILogger<ModulesController> logger)
            : base(userService)
        {
            _logger = logger;
            _moduleService = moduleService;
        }

        [HttpPost]
        public async Task<PaginationResponse> GetModules([FromBody]PaginationRequest paginationRequest)
        {
            try
            {
                var recordCount = await _moduleService.GetModulesCount(paginationRequest?.Filter);

                var sortOrder = SortOrder.Descending;

                if (!string.IsNullOrEmpty(paginationRequest?.Order?.OrderByProperty))
                    sortOrder = paginationRequest.Order.SortOrder;

                var modules = await _moduleService.GetModules(paginationRequest?.Filter, paginationRequest?.Order?.OrderByProperty, sortOrder, paginationRequest?.Page, paginationRequest?.PageSize);

                return new PaginationResponse
                {
                    Status = "Ok",
                    Data = modules,
                    RecordCount = recordCount
                };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error fetching modules.");
                return new PaginationResponse { Status = "Error", Message = "Error fetching modules." };
            }

        }

        [HttpGet]
        public async Task<ResponseMessage> GetModule(string moduleId)
        {
            try
            {
                var module = await _moduleService.GetModule(moduleId);

                return new ResponseMessage { Status = "Ok", Data = module };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error fetching module.");
                return new ResponseMessage { Status = "Error", Message = "Error fetching module." };
            }

        }

        [HttpPost]
        public async Task<ResponseMessage> SaveModule([FromBody]Module module)
        {
            try
            {
                if (module.Id == null)
                {
                    module.CreatedBy = LoginUser.Name;
                    module.CreatedDate = DateTime.UtcNow;
                }

                module.UpdatedBy = LoginUser.Name;
                module.UpdatedDate = DateTime.UtcNow;

                var savedModule = await _moduleService.SaveModule(module);

                if (savedModule == null) return new ResponseMessage { Status = "Error", Message = "Error saving module." };

                return new ResponseMessage { Status = "Ok", Data = savedModule };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error saving module.");
                return new ResponseMessage { Status = "Error", Message = "Error saving module." };
            }
        }

        [HttpDelete]
        public async Task<ResponseMessage> DeleteModule(string moduleId)
        {
            try
            {
                var status = await _moduleService.DeleteModule(moduleId);

                return new ResponseMessage { Status = "Ok", Data = status };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error deleting module.");
                return new ResponseMessage { Status = "Error", Message = "Error deleting module." };
            }
        }
    }
}
