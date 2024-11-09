
using backend.Aplication;
using backend.Domain.Entities;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controller;

[Route("api/[controller]")]
[ApiController]
public class UserController : ControllerBase
{
    private readonly IUserService _userService;

    public UserController(IUserService userService)
    {
        _userService = userService;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<User>>> GetUser()
    {
        var users = await _userService.GetUsers();
        return Ok(users);
    }

    [HttpPost]
    public async Task<ActionResult<User>> PostUser(User user)
    {
        await _userService.CreateUser(user);
        return Ok(user);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<User>> GetUserById(int id)
    {
        if (id == null)
        {
            return NotFound();
        }
        else
        {
            return await _userService.GetUserById(id);
        }


    }
}