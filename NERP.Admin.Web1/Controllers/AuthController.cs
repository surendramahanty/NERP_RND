using Common.Authentication;
using Common.Groups;
using Common.Groups.Models;
using Common.Roles;
using Common.Users;
using Common.Web.Model;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using NERP.Admin.Web.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace NERP.Admin.Web.Controllers
{
    [Authorize]
    public class AuthController : BaseController
    {
        private readonly IAuthService _authService;
		private readonly IUserService _userService;
        private readonly IRoleService _roleService;
        private readonly IGroupService _groupService;
        private readonly ILogger _logger;

        public AuthController(IAuthService authService, IUserService userService, IRoleService roleService, IGroupService groupService, ILogger<AuthController> logger) : base(userService)
        {
            _authService = authService;
			_userService = userService;
            _roleService = roleService;
            _groupService = groupService;
            _logger = logger;
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> Authenticate([FromBody]LoginVm loginVm)
        {
            var user = await _authService.Authenticate(loginVm.LoginId, loginVm.Password);

            if (user == null)
                return BadRequest(new { message = "User login id or password is incorrect" });

            return Ok(user);
        }

        [HttpGet]
        public async Task<ResponseMessage> GetLoginUserProfile()
        {
            try
            {
                //var loginId = User.Claims.First(c => c.Type == ClaimTypes.NameIdentifier).Value;
                //var user = await _userService.GetUserByLoginId(loginId);
                var role = await _roleService.GetRole(LoginUser.RoleId);
                var features = new List<string>();
                var permissions = new List<string>();

                foreach (var groupId in LoginUser.Groups)
                {
                    var group = await _groupService.GetGroup(groupId);

                    foreach (var item in group.ModuleFeatures)
                    {
                        features.AddRange(item.FeatureCodes);
                    }
                }

                foreach (var modulePermission in role.ModulePermissions)
                {
                    permissions.AddRange(modulePermission.PermissionCodes);
                }

                return new ResponseMessage
                {
                    Status = "Ok",
                    Data = new UserProfileVm
                    {
                        Id = LoginUser.Id,
                        LoginId = LoginUser.LoginId,
                        Name = LoginUser.Name,
                        Permissions = permissions,
                        Features = features
                    }
                };
            }
            catch (Exception ex)
            {
                _logger?.LogError(ex, "Error fetching user profile.");
                return new ResponseMessage { Status = "Error", Message = "Error fetching user profile." };
            }
        }

        [HttpGet]
        public bool IsAuthenthenticated()
        {
            return User.Identity.IsAuthenticated;
        }

        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> Logout()
        {
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);

            LoginUser.IsLogedIn = false;
            await _userService.SaveUser(LoginUser);

            return RedirectToAction("Index", "Login");
        }



        //[HttpGet]
        //[Route("api/ResetPassword")]
        //public bool ResetPassword(string userId, string oldPassword, string newPassword)
        //{
        //    return false;
        //}
    }
}
