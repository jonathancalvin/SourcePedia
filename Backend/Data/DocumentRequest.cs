using System.ComponentModel.DataAnnotations;
using System.Runtime.InteropServices;

namespace SE.Data
{
    public class DocumentRequest
    {
        [Required]
        public Guid userID { get; set; }
        [Required]
        [StringLength(255)]
        public string title { get; set; }
        [Required]
        [StringLength(int.MaxValue)]
        public string content { get; set; }
    }
}