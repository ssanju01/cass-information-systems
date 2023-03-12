namespace Entity.Models
{
    public class ApiResponse<T>
    {
        public ResponseHeader ResponseHeader { get; set; }
        public T Data { get; set; }
    }

    public class ResponseHeader
    {
        public int TotalCount { get; set; }
        public int PageSize { get; set; }
        public int PageNumber { get; set; }
    }
}
