using Entity.Models;
using Manager.Interfaces;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Manager.Repositories
{
    public class QuoteRepository : IQuoteRepository
    {
        private readonly IHttpService _httpService;
        private readonly AppSettingsModel _appSettingsModel;

        public QuoteRepository(IHttpService httpService, IOptions<AppSettingsModel> options)
        {
            _httpService = httpService;
            _appSettingsModel = options.Value;
        }

        public async Task<ApiResponse<T>> QuoteList<T>(string path)
        {
            var response = await _httpService.Get<T>(path);
            return new ApiResponse<T>
            {
                Data = response
            };
        }
    }
}
