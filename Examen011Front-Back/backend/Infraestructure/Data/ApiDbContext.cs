using System;
using backend.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace backend.Infraestructure.Data;

public class ApiDbContext : DbContext
{
    public ApiDbContext(DbContextOptions<ApiDbContext> options) : base(options)
    {
    }

    public DbSet<User> Users { get; set; }
}
