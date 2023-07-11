using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace vadimcpp.no.Pages
{
    public class BotModel : PageModel
    {
        private readonly ILogger<PrivacyModel> _logger;

        public BotModel(ILogger<PrivacyModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
            Console.WriteLine("OnGet!");
        }
    }
}
