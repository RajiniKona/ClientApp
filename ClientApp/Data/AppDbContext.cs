using ClientApp.Models;
using Microsoft.EntityFrameworkCore;

namespace ClientApp.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }

        public DbSet<ClientDetail> ClientDetails { get; set; }
    }
}
