using System.ComponentModel.DataAnnotations;

namespace SE.Data
{
    public class DocumentResponse
    {
        public Guid documentID { get; set; }
        public Guid userID { get; set; }
        public string userName { get; set; }
        public string title { get; set; }
        public string content { get; set; }
        public DateTime publishedTime { get; set; }
        public List<TagResponse> tag { get; set; }
    }
}