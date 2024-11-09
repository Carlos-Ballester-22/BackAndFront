using System;
using backend.Domain.Entities;

namespace backend.Infraestructure.Repositories.Memory;

public class InMemoryUser : IUserRespository
{
    private readonly List<User> users= new List<User>();
    private int idIndex = 1;

    public Task CreateUser(User user)
    {
        user.Id = idIndex++;
        users.Add(user);
        return Task.CompletedTask;
    }

    public Task<bool> Delete(User user)
    {
        throw new NotImplementedException();
    }

    public Task<IEnumerable<User>> GetAllUser()
    {
        return Task.FromResult<IEnumerable<User>>(users);
    }

    public Task<User> GetUserById(int userId)
    {
        var user = users.FirstOrDefault(userFind => userFind.Id == userId);
        return Task.FromResult(user);
    }

    public Task<bool> Update(User user)
    {
        throw new NotImplementedException();
    }
}
