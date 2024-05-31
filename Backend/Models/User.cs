using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SE.Models
{
    [Table("Users")]
    public class User
    {
        [Key]
        public Guid userID { get; set; }
        [MaxLength(50)]
        public string name { get; set; }
        [MaxLength(50)]
        public string email { get; set; }
        [MaxLength(50)]
        public string password { get; set; }

        public ICollection<Documents> Documents { get; set; }
    }
}