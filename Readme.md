comandos a tomar en cuenta:

dotnet new webapi -n backend
dotnet add package Microsoft.EntityFrameworkCore.Tools
dotnet add package Microsoft.EntityFrameworkCore.SqlServer --version 8.0.10

____________________________________________

appsetting.json

"DefaultConnection": "Server=localhost,1433;Database=DesarrolloDB;User Id=sa;Password=MoviesDb@123;TrustServerCertificate=True;Encrypt=False;"


docker-compose.yml

services:
  qlserver:
    image: mcr.microsoft.com/mssql/server:2019-latest
    environment:
      - ACCEPT_EULA=Y
      - SA_PASSWORD=MoviesDb@123
    ports:
      - "1433:1433"
    volumes:
      - sqlserver_data:/var/opt/mssql
volumes:
  sqlserver_data:	


para generar y levantar el contenedor en docker:

docker compose up
____________________________________________


Program.cs

var conn = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddDbContext<ApiDbContext>(options =>
options.UseSqlServer(conn));

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin",
        policy =>
        {
            policy.AllowAnyOrigin()
                  .AllowAnyMethod()
                  .AllowAnyHeader();
        });
});

app.UseCors("AllowSpecificOrigin");

____________________________________________

comandos para generar migraciones:

dotnet ef migrations add Initial
dotnet ef migrations add ConfigureCarIdAsIdentity //opcional, si quieren que se incremente los id de pk automaticamente
dotnet ef  database update

si llegas a cambiar cosas en modelos, ApiDbContext, etc:

dotnet ef database drop
dotnet ef  database update

____________________________________________

Para los controladores:

importaciones
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
// importar modelos y Data


Antes de estructurar la clase va esto:

[Route("api/[controller]")]
[ApiController]
public class ...

____________________________________________


Program.cs

nivel de builder.
builder.Services.AddControllers();

nivel de app.
app.MapControllers();


