using System;
using backend.Domain.Entities;
using backend.Infraestructure.Repositories;

namespace backend.Aplication;

public class UserService : IUserService
{
    private readonly IUserRespository _userRepository;

    public UserService(IUserRespository userRepository)
    {
        _userRepository = userRepository;
    }

    public Task CreateUser(User user)
    {
        return _userRepository.CreateUser(user);
    }

    public async Task<User> GetUserById(int id)
    {
        return await _userRepository.GetUserById(id);
    }

    public async Task<IEnumerable<User>> GetUsers()
    {
        return await _userRepository.GetAllUser();
    }
}
