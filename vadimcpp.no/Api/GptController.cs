using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace vadimcpp.no.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class GptController : ControllerBase
    {
        [HttpPost]
        public IActionResult Get()
        {
            var data = new { Name = "John", Age = 30 };
 
            return Ok(data);
        }
    }
}
