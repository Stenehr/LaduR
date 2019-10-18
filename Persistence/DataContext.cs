using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        { }

        public DbSet<ProductName> ProductNames { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<ProductName>()
                .HasData(
                    new ProductName { Id = 1, Name = "Haamer" },
                    new ProductName { Id = 2, Name = "Nuga" },
                    new ProductName { Id = 3, Name = "Kaabel" }
                );
        }
    }
}
