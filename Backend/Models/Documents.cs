using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SE.Models
{
    [Table("Documents")]
    public class Documents
    {
        [Key]
        public Guid documentID { get; set; }
        [ForeignKey("User")]
        public Guid userID { get; set; }
        [MaxLength(255)]
        public string title { get; set; }
        [MaxLength]
        public string content { get; set; }
        public DateTime publishedTime { get; set; }

        //public ICollection<DocumentTags> DocumentTags { get; set; }
        //public ICollection<Tag> Tags { get; set; }
        public List<DocumentsTag> DocumentsTag { get; set; }
        public User User { get; set; }
    }
}