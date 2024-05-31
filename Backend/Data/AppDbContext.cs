using Microsoft.EntityFrameworkCore;
using SE.Models;
using System.Reflection.Metadata;

namespace SE.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<DocumentsTag>()
                .HasKey(dt => new { dt.documentID, dt.tagID });

            modelBuilder.Entity<DocumentsTag>()
                .HasOne(dt => dt.Document)
                .WithMany(d => d.DocumentsTag)
                .HasForeignKey(dt => dt.documentID);

            modelBuilder.Entity<DocumentsTag>()
                .HasOne(dt => dt.Tag)
                .WithMany(t => t.DocumentsTag)
                .HasForeignKey(dt => dt.tagID);
        }
        public DbSet<User> Users { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<Documents> Documents { get; set; }
        public DbSet<DocumentsTag> DocumentsTags { get; set; }
    }
}