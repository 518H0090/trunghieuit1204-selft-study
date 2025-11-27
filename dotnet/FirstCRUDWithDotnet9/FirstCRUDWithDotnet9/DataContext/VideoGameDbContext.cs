using FirstCRUDWithDotnet9.Models;
using Microsoft.EntityFrameworkCore;

namespace FirstCRUDWithDotnet9.DataContext
{
    public class VideoGameDbContext : DbContext
    {
        public VideoGameDbContext(DbContextOptions<VideoGameDbContext> options) : base(options)
        {
            
        }

        public DbSet<VideoGame> VideoGames { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<VideoGame>(entity =>
            {
                entity.HasKey(x => x.Id);

                entity.Property(x => x.Id).UseIdentityColumn(1, 1);
            });

            modelBuilder.ApplyConfigurationsFromAssembly(typeof(VideoGameDbContext).Assembly);
        }
    }
}
