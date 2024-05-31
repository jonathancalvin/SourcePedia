using System.ComponentModel.DataAnnotations;

namespace SE.Data
{
    public class NewUserRequest
    {
        [Required]
        [StringLength(50)]
        public string name { get; set; }
        [Required]
        [StringLength(50)]
        public string email { get; set; }
        [Required]
        [StringLength(50)]
        public string password { get; set; }




        //[Required]
        //[StringLength(5)]
        //[RegularExpression(@"^UR[0-9][0-9][0-9]$")]
        //public string UserId { get; set; }
        //[Required]
        //[MaxLength(255)]
        //public string UserName { get; set; }
        //[Required]
        //[MaxLength(255)]
        //[RegularExpression(@"^[\w\.]+@([\w]+\.)+[\w]{2,4}$")]
        //public string UserEmail { get; set; }
        //[Required]
        //[MinLength(8)]
        //[MaxLength(255)]
        //[RegularExpression(@"^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{8,}$")]
        //public string UserPassword { get; set; }
    }
}
