using Common.Users;
using Common.Users.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Routing;

namespace NERP.API.Controllers
{
    public class BaseController : Controller
    {
        public User LoginUser;

        private readonly IUserService _usersManager;

        public BaseController(IUserService userService)
        {
            _usersManager = userService;
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

                LoginUser = _usersManager.GetUserByLoginId(loginId).Result;

                if (LoginUser == null || LoginUser.IsActive == false) context.Result = new RedirectToRouteResult(loginRroute);
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
