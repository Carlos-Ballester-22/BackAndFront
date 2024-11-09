using System;
using backend.Application;
using backend.Infraestructure.Repositories;
using backend.Infraestructure.Repositories.Memory;

namespace backend.Infraestructure.Configuration;

public static class DependencyInjector
{
    public static void InjectDependencies(this IServiceCollection services)
    {
        InjectRepositories(services);
        InjectServices(services);
    }

    private static void InjectRepositories(IServiceCollection services)
    {
        /// EN MEMORIA

        services.AddSingleton<IUserRepository, InMemoryUserRepository>(); //comentarlo

        ////BASE DE DATOS
        // services.AddScoped<IUserRepository, UserRepository>(); // comentarlo
    }

    private static void InjectServices(IServiceCollection services)
    {
        services.AddScoped<IUserService, UserService>();
    }
}