using Entity.Models;
using Manager.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/quotes")]
    [ApiController]
    public class QuoteController : ControllerBase
    {
        private readonly IQuoteRepository _quoteRepository;

        public QuoteController(IQuoteRepository quoteRepository)
        {
            _quoteRepository = quoteRepository;
        }

        [HttpGet("random")]
        public async Task<IActionResult> GetRandomQuotes()
        {
            var response = await _quoteRepository.QuoteList<QuoteModel>("random");
            return Ok(response);
        }

        [HttpGet("search/{query}")]
        public async Task<IActionResult> SearchQuotes(string query)
        {
            var response = await _quoteRepository.QuoteList<SearchQuoteModel>($"search/quotes?query={query}");
            return Ok(response);
        }
    }
}
