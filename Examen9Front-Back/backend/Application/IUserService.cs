using backend.Domain.Entities;

namespace backend.Application;

public interface IUserService
{
    Task<IEnumerable<User>> GetAllUsersAsync();
    Task<User> GetUserByIdAsync(int id);
    Task<User> CreateUserAsync(User user);
    Task<bool> DeleteUserAsync(int id);
    Task<bool> UpdateUserAsync(User user);
}