using Common.Users;
using Common.Web.Filters;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace NERP.Admin.Web.Controllers
{
    [Authorize]
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true, Duration = 0)]
    [ServiceFilter(typeof(ActivityLogFilter))]
    public class HomeController : BaseController
    {
        private readonly ILogger _logger;

        public HomeController(IUserService userService, ILogger<HomeController> logger) : base(userService)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            ViewBag.User = LoginUser;

            return View();
        }
    }
}
