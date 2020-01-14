using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using System;
using System.IO;

namespace NERP.RND.Web
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var config = new ConfigurationBuilder()
           .SetBasePath(Directory.GetCurrentDirectory())
           .AddJsonFile("hosting.json", optional: true)
           .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
           .Build();

            var host = new WebHostBuilder()
            .UseKestrel(o => { o.Limits.MaxRequestBodySize = long.MaxValue; o.Limits.KeepAliveTimeout = TimeSpan.FromMinutes(600); })
            .UseConfiguration(config)
            .UseContentRoot(Directory.GetCurrentDirectory())
            .UseIISIntegration()
            .UseStartup<Startup>()
            .Build();

            host.Run();

            //CreateWebHostBuilder(args).Build().Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseKestrel(o => { o.Limits.MaxRequestBodySize = long.MaxValue; o.Limits.KeepAliveTimeout = TimeSpan.FromMinutes(600); })
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseIISIntegration()
                .UseStartup<Startup>();
    }
}
