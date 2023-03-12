using Entity.Models;
using Manager.Interfaces;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;

namespace Manager.Services
{
    public class HttpService : IHttpService
    {
        private readonly HttpClient _httpClient;
        private readonly AppSettingsModel _appSettings;

        public HttpService(IHttpClientFactory clientFactory, IOptions<AppSettingsModel> options)
        {
            _httpClient = clientFactory.CreateClient();
            _appSettings = options.Value;
        }

        public async Task<T> Get<T>(string path)
        {
            var response = await _httpClient.GetAsync($"{_appSettings.QuoteAPIUrl}{path}");
            var content = await response.Content.ReadAsStringAsync();
            return JsonConvert.DeserializeObject<T>(content);
        }
    }
}
