using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using NERP.GeoServices.API.Models;
using Serilog;

namespace NERP.GeoServices.API
{
    public class Startup
    {
        public ILoggerFactory _LoggerFactory { get; set; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder
                        .AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                        .AllowCredentials());
            });

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);

            services.Configure<AppSettings>(Configuration.GetSection("AppSettings"));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
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

            System.Text.Encoding.RegisterProvider(System.Text.CodePagesEncodingProvider.Instance);

            app.UseMvc();
        }
    }
}
