using Entity.Models;

namespace Manager.Interfaces
{
    public interface IQuoteRepository
    {
        Task<ApiResponse<T>> QuoteList<T>(string path);
    }
}
