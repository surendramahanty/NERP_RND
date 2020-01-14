using Common.Authentication;
using Common.Groups;
using Common.Users;
using Common.Web.Model;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Security.Claims;
using System.Threading.Tasks;

namespace NERP.RND.Web.Controllers
{
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true, Duration = 0)]
    public class LoginController : Controller
    {
        private readonly ILogger _logger;
        private readonly IUserService _userService;
        private readonly IAuthService _authService;
        private readonly IGroupService _groupService;

        public const string ModuleName = "RND";

        public LoginController(IUserService userService, IAuthService authService, IGroupService groupService, ILogger<LoginController> logger)
        {
            _logger = logger;
            _authService = authService;
            _userService = userService;
            _groupService = groupService;
        }

        public IActionResult Index()
        {
            var isAuthenticated = HttpContext?.User?.Identity.IsAuthenticated;

            if (isAuthenticated != null && isAuthenticated == true)
            {
                var loginId = User?.FindFirst("LoginId").Value;

                if (loginId == null)
                    return RedirectToActionPermanent("Index", "Login");

                return Redirect("../home/");
            }

            return View();
        }

        [HttpPost]
        public async Task<ActionResult> Index(LoginVm credentials)
        {
            var user = await _authService.Authenticate(credentials.LoginId, credentials.Password);

            if (user == null || user.IsActive == false)
            {
                ViewBag.Message = "Invalid user name or password.";
                return View();
            }
            else
            {
                //validate if user has access to this module
                var hasAccess = false;

                foreach (var groupId in user.Groups)
                {
                    var group = await _groupService.GetGroup(groupId);

                    if (group != null)
                    {
                        var index = group.ModuleFeatures.FindIndex(x => x.ModuleName == ModuleName);

                        if (hasAccess == false)
                            hasAccess = index >= 0 ? true : false;
                    }
                }

                if (hasAccess == false)
                {
                    ViewBag.Message = "User has no permission to access the module.";
                    return View();
                }
                else
                {
                    user.LastLogin = DateTime.UtcNow;
                    user.IsLogedIn = true;
                    await _userService.SaveUser(user);
                    _userService.UpdateLoginUserCount();

                    var identity = new ClaimsIdentity(CookieAuthenticationDefaults.AuthenticationScheme);

                    identity.AddClaim(new Claim("LoginId", credentials.LoginId));

                    await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(identity));

                    return Redirect("/home/");
                }
            }
        }
    }
}
