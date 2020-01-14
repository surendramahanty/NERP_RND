using AutoMapper;
using Common.Users;
using Common.Web.Filters;
using Common.Web.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using NERP.GeneralSettings;
using NERP.GeneralSettings.Model;
using System;
using System.Threading.Tasks;

namespace NERP.Admin.Web.Controllers
{
    [Authorize]
    [ServiceFilter(typeof(ActivityLogFilter))]
    public class GeneralSettingsController : BaseController
    {
        private readonly ILogger _logger;
        private readonly IGeneralSettingsService _generalSettingsService;
        private readonly IMapper _mapper;

        public GeneralSettingsController(IGeneralSettingsService generalSettingsService, IUserService userService, IMapper mapper, ILoggerFactory loggerFactory) : base(userService)
        {
            if (loggerFactory != null)
                _logger = loggerFactory.CreateLogger("GeneralSettingsController");

            _generalSettingsService = generalSettingsService;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ResponseMessage> GetGeneralSettings()
        {
            try
            {
                var generalSettings = await _generalSettingsService.GetGeneralSettings();

                return new ResponseMessage
                {
                    Status = "Ok",
                    Data = generalSettings
                };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error fetching groups.");
                return new ResponseMessage { Status = "Error", Message = "Error fetching groups." };
            }
        }

        [HttpPost]
        public async Task<ResponseMessage> SaveGeneralSettings([FromBody]GeneralSetting generalSettings)
        {
            try
            {
                //string loginUserId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

                //var loginUser = await _userService.GetUserByLoginId(loginUserId);

                if (generalSettings.Id == null)
                {
                    generalSettings.CreatedBy = LoginUser.Name;
                    generalSettings.CreatedDate = DateTime.UtcNow;
                }

                generalSettings.UpdatedBy = LoginUser.Name;
                generalSettings.UpdatedDate = DateTime.UtcNow;

                var savedGeneralSettings = await _generalSettingsService.SaveGeneralSettings(generalSettings);

                if (savedGeneralSettings == null) return new ResponseMessage { Status = "Error", Message = "Error saving general settings." };

                return new ResponseMessage { Status = "Ok", Data = savedGeneralSettings };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error saving general settings.");
                return new ResponseMessage { Status = "Error", Message = "Error saving general settings." };
            }
        }
    }
}
