using System;
using backend.Domain.Entities;

namespace backend.Aplication;

public interface IUserService
{
    Task CreateUser(User user);

    Task<User> GetUserById(int id);

    Task<IEnumerable<User>> GetUsers();
}
