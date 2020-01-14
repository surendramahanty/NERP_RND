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

namespace NERP.RND.Web.Controllers
{
    [Authorize]
    [ServiceFilter(typeof(ActivityLogFilter))]
    public class PolesController : BaseController
    {
        private readonly ILogger _logger;
        private readonly IPoleService _poleService;

        public PolesController(IUserService userService, IPoleService poleService, ILogger<PolesController> logger)
            : base(userService)
        {
            _logger = logger;
            _poleService = poleService;
        }

        [HttpPost]
        public async Task<PaginationResponse> GetPoles([FromBody]PaginationRequest paginationRequest)
        {
            try
            {
                var recordCount = await _poleService.GetPolesCount(paginationRequest?.Filter);

                var sortOrder = SortOrder.Descending;

                if (!string.IsNullOrEmpty(paginationRequest?.Order?.OrderByProperty))
                    sortOrder = paginationRequest.Order.SortOrder;

                var poles = await _poleService.GetPoles(paginationRequest?.Filter, paginationRequest?.Order?.OrderByProperty, sortOrder, paginationRequest?.Page, paginationRequest?.PageSize);

                return new PaginationResponse
                {
                    Status = "Ok",
                    Data = poles,
                    RecordCount = recordCount
                };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error fetching poles.");
                return new PaginationResponse { Status = "Error", Message = "Error fetching poles." };
            }

        }

        [HttpGet]
        public async Task<ResponseMessage> GetPole(string poleId)
        {
            try
            {
                var pole = await _poleService.GetPole(poleId);

                return new ResponseMessage { Status = "Ok", Data = pole };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error fetching pole.");
                return new ResponseMessage { Status = "Error", Message = "Error fetching pole." };
            }

        }

        [HttpGet]
        public async Task<ResponseMessage> CheckNameExists(string name)
        {
            try
            {
                var id = await _poleService.CheckNameExists(name);

                return new ResponseMessage { Status = "Ok", Data = id };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error checking name.");
                return new ResponseMessage { Status = "Error", Message = "Error checking name." };
            }
        }

        [HttpPost]
        public async Task<ResponseMessage> SavePole([FromBody]Pole pole)
        {
            try
            {
                if (pole.Id == null)
                {
                    pole.CreatedBy = LoginUser.Name;
                    pole.CreatedDate = DateTime.UtcNow;
                }

                pole.UpdatedBy = LoginUser.Name;
                pole.UpdatedDate = DateTime.UtcNow;

                var savedPole = await _poleService.SavePole(pole);

                if (savedPole == null) return new ResponseMessage { Status = "Error", Message = "Error saving pole." };

                return new ResponseMessage { Status = "Ok", Data = savedPole };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error saving pole.");
                return new ResponseMessage { Status = "Error", Message = "Error saving pole." };
            }
        }

        [HttpDelete]
        public async Task<ResponseMessage> DeletePole(string poleId)
        {
            try
            {
                var status = await _poleService.DeletePole(poleId);
                return new ResponseMessage { Status = "Ok", Data = status };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error deleting pole.");
                return new ResponseMessage { Status = "Error", Message = "Error deleting pole." };
            }
        }
    }
}
