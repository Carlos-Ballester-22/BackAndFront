using backend.Domain.Entities;

namespace backend.Infraestructure.Repositories.Memory;

public class InMemoryUserRepository : IUserRepository
{
    private readonly List<User> _users = new List<User>();
    private int _nextId = 1;

    public Task<IEnumerable<User>> GetAllAsync()
    {
        return Task.FromResult<IEnumerable<User>>(_users);
    }

    public Task<User> GetByIdAsync(int id)
    {
        var user = _users.FirstOrDefault(u => u.Id == id);
        return Task.FromResult(user);
    }

    public Task AddAsync(User user)
    {
        user.Id = _nextId++;
        _users.Add(user);
        return Task.CompletedTask;
    }

    public Task<bool> DeleteAsync(int id)
    {
        var user = _users.FirstOrDefault(u => u.Id == id);
        if (user == null)
        {
            return Task.FromResult(false);
        }

        _users.Remove(user);
        return Task.FromResult(true);
    }

    public Task<bool> UpdateAsync(User user)
    {
        var existingUser = _users.FirstOrDefault(u => u.Id == user.Id);
        if (existingUser == null)
        {
            return Task.FromResult(false);
        }

        // Actualizar los datos del usuario
        existingUser.Name = user.Name;
        existingUser.LasName = user.LasName;
        existingUser.NumberPhone = user.NumberPhone;

        return Task.FromResult(true);
    }
}
