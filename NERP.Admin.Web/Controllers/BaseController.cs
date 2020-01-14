using Common.Users;
using Common.Users.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Routing;
using System;

namespace NERP.Admin.Web.Controllers
{
    public class BaseController : Controller
    {
        public User LoginUser;
        public const string ModuleName = "ADMIN";

        private readonly IUserService _userService;

        public BaseController(IUserService userService)
        {
            _userService = userService;
        }

        public override void OnActionExecuting(ActionExecutingContext context)
        {
            var loginRroute = new RouteValueDictionary { { "controller", "Login" }, { "action", "Index" } };

            base.OnActionExecuting(context);

            var isAuthenticated = HttpContext?.User?.Identity.IsAuthenticated;

            if (isAuthenticated != null && isAuthenticated == true)
            {
                var loginId = User.FindFirst("LoginId")?.Value;

                if (string.IsNullOrEmpty(loginId)) context.Result = new RedirectToRouteResult(loginRroute);

                LoginUser = _userService.GetUserByLoginId(loginId).Result;

                if (LoginUser == null || LoginUser.IsActive == false)
                {
                    LoginUser.IsLogedIn = false;
                    _userService.SaveUser(LoginUser);
                    context.Result = new RedirectToRouteResult(loginRroute);
                }
                else
                {
                    LoginUser.LastLogin = DateTime.UtcNow;
                    LoginUser.IsLogedIn = true;
                    _userService.SaveUser(LoginUser);
                }
            }
            else
            {
                context.Result = new RedirectToRouteResult(loginRroute);
            }

            //var lang = Request.Cookies.FirstOrDefault(x => x.Key == "lang");
            //if (lang.Equals(default(KeyValuePair<string, string>)))
            //{
            //    Response.Cookies.Append("lang", "it-it");
            //}
            //else
            //{
            //    Response.Cookies.Append("lang", lang.Value);
            //}
        }
    }
}
