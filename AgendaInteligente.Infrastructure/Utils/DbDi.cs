using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using Microsoft.EntityFrameworkCore;
using AgendaInteligente.Infrastructure.DataBase;
using System;
using System.Collections.Generic;
using System.Text;
using System.Runtime.CompilerServices;

namespace AgendaInteligente.Infrastructure.Utils
{
    public static class DbDi
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<DbInitializer>(options => options.UseNpgsql(configuration.GetConnectionString("DefaultConnection")));
            return services;
        }
    }
}
