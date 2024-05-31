using System.ComponentModel.DataAnnotations.Schema;

namespace SE.Models
{
    [Table("DocumentsTag")]
    public class DocumentsTag
    {
        public Guid documentID { get; set; }
        public Guid tagID { get; set; }

        public Documents Document { get; set; }
        public Tag Tag { get; set; }
    }
}
