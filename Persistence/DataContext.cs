using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        { }

        public DbSet<ProductName> ProductNames { get; set; }
        public DbSet<Vendor> Vendors { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<ProductName>()
                .HasData(
                    new ProductName { Id = 1, Name = "Haamer" },
                    new ProductName { Id = 2, Name = "Nuga" },
                    new ProductName { Id = 3, Name = "Kaabel" }
                );

            builder.Entity<Vendor>()
                .HasData(
                    new Vendor { Id = 1, Name = "K-Rauta", Address = "Tondi 4"},
                    new Vendor { Id = 2, Name = "Espak", Address = "Tuuliku tee 2"}
                );
        }
    }
}
