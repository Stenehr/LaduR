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
        public DbSet<Product> Products { get; set; }
        public DbSet<OrderIn> OrdersIn { get; set; }
        public DbSet<OrderInDetails> OrderInDetails { get; set; }
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

            builder.Entity<OrderIn>()
                .HasMany(x => x.OrderDetails)
                .WithOne(od => od.OrderIn)
                .OnDelete(DeleteBehavior.Cascade);

            builder.Entity<OrderInDetails>()
                .HasOne(x => x.Product)
                .WithOne(p => p.OrderInDetails)
                .HasForeignKey<OrderInDetails>(x => x.ProductId)
                .OnDelete(DeleteBehavior.Cascade);

            // builder.Entity<Product>()
            //     .HasOne(x => x.OrderInDetails)
            //     .WithOne(od => od.Product)
            //     .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
