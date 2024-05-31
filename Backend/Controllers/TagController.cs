using Microsoft.AspNetCore.Mvc;
using SE.Data;
using SE.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TagController : ControllerBase
    {
        public readonly AppDbContext _context;

        public TagController(AppDbContext context)
        {
            _context = context;
        }
        //hi    

        // GET: api/<TagController>
        [HttpGet]
        public List<Tag> Get()
        {
            var tagList = _context.Tags
                .Select(x => new Tag
                {
                    tagID = x.tagID,
                    tagName = x.tagName,
                    tagImage = x.tagImage,
                });
            return tagList.ToList();
        }

    }
}
