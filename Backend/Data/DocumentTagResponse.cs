using SE.Models;

namespace SE.Data
{
    public class DocumentTagResponse
    {
        public Guid documentID { get; set; }
        public Guid userID { get; set; }
        public string title { get; set; }
        public string content { get; set; }
        public DateTime publishedTime { get; set; }
        public List<Tag> tag { get; set; }
    }
}
