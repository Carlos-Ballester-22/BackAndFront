using System;
using backend.Domain.Entities;


namespace backend.Infraestructure.Repositories;

public interface IUserRespository
{
    Task<IEnumerable<User>> GetAllUser();
    Task CreateUser(User user);
    Task<User> GetUserById(int user);
    Task<bool> Delete(User user);
    Task<bool> Update(User user);

}
