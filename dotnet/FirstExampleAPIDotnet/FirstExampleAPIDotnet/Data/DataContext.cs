using FirstExampleAPIDotnet.Entities;
using Microsoft.EntityFrameworkCore;

namespace FirstExampleAPIDotnet.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            
        }

        public DbSet<SuperHero> SuperHeroes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<SuperHero>(entity =>
            {
                entity.HasKey(e => e.Id);

                entity.Property(e => e.Id).UseIdentityColumn(1, 1);
            });
        }
    }
}
