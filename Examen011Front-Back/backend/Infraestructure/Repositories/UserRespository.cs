using System;
using backend.Domain.Entities;
using backend.Infraestructure.Data;
using Microsoft.EntityFrameworkCore;


namespace backend.Infraestructure.Repositories;

public class UserRespository : IUserRespository
{
   private readonly ApiDbContext _context;

    public UserRespository(ApiDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<User>> GetAllUser(){
         return await _context.Users.ToListAsync();
    }

    public async Task<User> GetUserById(int id){
        return await _context.Users.FindAsync(id);
    }

    public async Task CreateUser(User user)
    {
        await _context.Users.AddAsync(user);
        await _context.SaveChangesAsync();
    }

    public Task<bool> Delete(User user)
    {
        throw new NotImplementedException();
    }

    public Task<bool> Update(User user)
    {
        throw new NotImplementedException();
    }
}
