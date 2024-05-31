namespace SE.Data
{
    public class UpdateDocumentRequest
    {
        public Guid documentID { get; set; }
        public Guid userID { get; set; }
        public string title { get; set; }
        public string content { get; set; }
    }
}
