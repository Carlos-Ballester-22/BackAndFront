using System;
using backend.Aplication;
using backend.Infraestructure.Repositories;
using backend.Infraestructure.Repositories.Memory;

namespace backend.Infraestructure.Configuration;

public static class DependencyInjection
{
    public static void InjectDependencies(this IServiceCollection services)
    {
        DependencyInjectionRespositories(services);
        DependencyInjectionServices(services);
    }

    public static void DependencyInjectionRespositories(IServiceCollection services)
    {
        // services.AddSingleton<IUserRespository, InMemoryUser>();
        services.AddScoped<IUserRespository, UserRespository>();
    }

    public static void DependencyInjectionServices(IServiceCollection services)
    {
        services.AddScoped<IUserService, UserService>();

    }
}
