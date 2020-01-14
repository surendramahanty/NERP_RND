using AutoMapper;
using Common.ActivityLogs;
using Common.Authentication;
using Common.Config;
using Common.Groups;
using Common.Modules;
using Common.Roles;
using Common.Users;
using Common.Web.Filters;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using NERP.GeneralSettings;
using NERP.NetworkEntities;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Serialization;
using Serilog;
using System;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;

namespace NERP.Admin.Web
{
    public class Startup
    {
        //readonly IHostingEnvironment _hostingEnvironment;
        public IConfigurationRoot _Configuration { get; }
        public ILoggerFactory _LoggerFactory { get; set; }

        public Startup(IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();

            _Configuration = builder.Build();
        }

        public void ConfigureServices(IServiceCollection services)
        {
            // Add authentication services
            services
                .AddAuthentication(o =>
                {
                    o.DefaultChallengeScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                    o.DefaultSignInScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                    o.DefaultAuthenticateScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                })
                .AddCookie(options =>
                {
                    options.Cookie.Name = "NERP_Admin";
                    options.LoginPath = new PathString("/Login");
                    options.LogoutPath = new PathString("/logout");
                    options.ExpireTimeSpan = TimeSpan.FromDays(1);
                    options.SlidingExpiration = true;
                    options.Cookie.SecurePolicy = CookieSecurePolicy.SameAsRequest;
                });

            //Registered CORS functionality
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder
                        .AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                        .AllowCredentials());
            });

            services.AddResponseCaching();

            var mappingConfig = new MapperConfiguration(mc =>
            {
                mc.AddProfile(new MappingProfile());
            });

            IMapper mapper = mappingConfig.CreateMapper();
            services.AddSingleton(mapper);

			services.AddResponseCompression();
            //services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
            
			// Add framework services.
            services.AddMvc(options =>
            {
                //// Setup glogal action filters
                //options.Filters.Add(new GlobalActionFilter(_LoggerFactory));

                ////Setup global exception filters
                //options.Filters.Add(new ApiExceptionFilter(_LoggerFactory));
            }).AddJsonOptions(opt =>
            {
                var resolver = opt.SerializerSettings.ContractResolver;
                if (resolver != null)
                {
                    var res = resolver as DefaultContractResolver;
                    res.NamingStrategy = null;
                }

                opt.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
                //opt.SerializerSettings.Converters.Add(new StringEnumConverter());
                opt.SerializerSettings.Formatting = Formatting.Indented;
                opt.SerializerSettings.NullValueHandling = NullValueHandling.Ignore;
                opt.SerializerSettings.MissingMemberHandling = MissingMemberHandling.Ignore;
                // Converters will be userd during serialization (override DateTimeZoneHandling)
                opt.SerializerSettings.Converters.Add(new IsoDateTimeConverter { DateTimeStyles = DateTimeStyles.AdjustToUniversal });
                // DateTimeZoneHandling will be effective during deserialization
                opt.SerializerSettings.DateTimeZoneHandling = DateTimeZoneHandling.RoundtripKind;
            });

            var appSettingsSection = _Configuration.GetSection("AppSettings");

            var appSettings = appSettingsSection.Get<AppSettings>();
            var key = Encoding.ASCII.GetBytes(appSettings.JwtToken.Secret);

            services.Configure<AppSettings>(appSettingsSection);
            services.Configure<DbConfig>(_Configuration.GetSection("DatabaseSettings"));

            services.AddScoped<IAuthService, AuthService>();
            services.AddScoped<IModuleService, ModuleService>();
            services.AddScoped<IGroupService, GroupService>();
            services.AddScoped<IRoleService, RoleService>();
            services.AddScoped<IUserService, UserService>();
            
            services.AddScoped<ICableService, CableService>();
            services.AddScoped<IChamberService, ChamberService>();
            services.AddScoped<IDuctService, DuctService>();
            services.AddScoped<IODFService, ODFService>();
            services.AddScoped<IPoleService, PoleService>();
            services.AddScoped<ISpliceClosureService, SpliceClosureService>();
            services.AddScoped<ISplitterService, SplitterService>();
            services.AddScoped<IHomepassService, HomepassService>();

            services.AddScoped<IGeneralSettingsService, GeneralSettingsService>();

            services.AddScoped<IAccessoryService, AccessoryService>();
            services.AddScoped<ICivilworkService, CivilworkService>();

            services.AddScoped<IActivityLogService, ActivityLogService>();
            services.AddScoped<ActivityLogFilter>();

            var userService = new UserService(_Configuration.GetSection("DatabaseSettings").Get<DbConfig>());
            userService.ResetLoginStatus();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            Log.Logger = new LoggerConfiguration()
                   .WriteTo.RollingFile(pathFormat: "logs\\log-{Date}.log", retainedFileCountLimit: null)
                   .CreateLogger();

            loggerFactory.WithFilter(new FilterLoggerSettings
                {
                    {"Trace", LogLevel.Trace },
                    {"Default", LogLevel.Trace},
                    {"Microsoft", LogLevel.Warning}, // very verbose
                    {"System", LogLevel.Warning}
                })
                .AddSerilog(dispose: true);

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            _LoggerFactory = loggerFactory;

            app.UseResponseCaching();
            app.UseAuthentication();
            app.UseStaticFiles();
            app.UseResponseCompression();

            app.UseStaticFiles(new StaticFileOptions
            {
                OnPrepareResponse = context =>
                {
                    //context.Context.Response.Headers.Remove("Content-Length");
                    context.Context.Response.Headers.Remove("Server");
                    context.Context.Response.Headers.Add("X-Frame-Options", "SAMEORIGIN");
                    context.Context.Response.Headers.Add("X-Content-Type-Options", "nosniff");
                    context.Context.Response.Headers.Add("X-Xss-Protection", "1; mode=block");
                }
            });

            app.Use(async (context, next) =>
            {
                context.Response.Headers.Remove("Server");
                context.Response.Headers.Add("X-Frame-Options", "SAMEORIGIN");
                context.Response.Headers.Add("X-Content-Type-Options", "nosniff");
                context.Response.Headers.Add("X-Xss-Protection", "1; mode=block");

                await next();

                var headers = context.Request.GetTypedHeaders();

                if (context.Response.StatusCode == 404 && !(headers.ContentType != null && (headers.ContentType.MediaType == "application/json") || headers.Accept.Any(header => header.MediaType == "application/json")) && !Path.HasExtension(context.Request.Path.Value))
                {
                    //context.Request.Path = "/index.html"; // Put your Angular root page here
                    context.Request.Path = "/Home/Index";
                    await next();
                }
            });

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Login}/{action=Index}/{id?}");

                routes.MapRoute(
                    name: "api",
                    template: "api/{controller}/{action}/{id?}");
            });
        }
    }
}