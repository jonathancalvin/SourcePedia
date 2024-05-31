using System.ComponentModel.DataAnnotations;

namespace SE.Data
{
    public class ValidateUser
    {
        [Required]
        [StringLength(50)]
        public string email { get; set; }
        [Required]
        [StringLength(50)]
        public string password { get; set; }
    }
}
