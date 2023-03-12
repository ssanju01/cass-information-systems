using Entity.Models;

namespace Manager.Interfaces
{
    public interface IShipperRepository
    {
        Task<ApiResponse<List<ShipperModel>>> GetList();
        Task<ApiResponse<List<ShipperShipmentDetailsModel>>> Get(int id);
    }
}
