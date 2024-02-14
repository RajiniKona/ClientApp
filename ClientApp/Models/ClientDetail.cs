using System.ComponentModel.DataAnnotations;

namespace ClientApp.Models
{
    public class ClientDetail
    {
        [Key]
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? WebSite { get; set; }
        public string? DirectorName { get; set; }
        public string? EmailAddress { get; set; }
    }
}
