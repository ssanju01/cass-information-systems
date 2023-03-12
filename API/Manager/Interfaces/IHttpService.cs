namespace Manager.Interfaces
{
    public interface IHttpService
    {
        Task<T> Get<T>(string url);
    }
}
