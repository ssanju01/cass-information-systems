using DataAccess.DBContext;
using Entity.Models;
using Manager.Interfaces;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System.Data;

namespace Manager.Repositories
{
    public class ShipperRepository : IShipperRepository
    {
        private readonly CassInformationSystemsDbContext _dbContext;

        public ShipperRepository(CassInformationSystemsDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<ApiResponse<List<ShipperShipmentDetailsModel>>> Get(int id)
        {
            DataTable shipmentDetails = new DataTable("shipmentDetails");
            var connection = _dbContext.Database.GetDbConnection().ConnectionString;
            SqlDataAdapter sqlDataAdapter = new SqlDataAdapter("Shipper_Shipment_Details", connection);
            sqlDataAdapter.SelectCommand.CommandType = CommandType.StoredProcedure;
            sqlDataAdapter.SelectCommand.Parameters.Add(new SqlParameter("@shipper_id", id));
            sqlDataAdapter.Fill(shipmentDetails);

            return new ApiResponse<List<ShipperShipmentDetailsModel>>
            {
                Data = shipmentDetails.AsEnumerable().Select(m => new ShipperShipmentDetailsModel
                {
                    ShipmentId = m.Field<int>("shipment_id"),
                    ShipperName = m.Field<string>("shipper_name"),
                    CarrierName = m.Field<string>("carrier_name"),
                    ShipmentDescription = m.Field<string>("shipment_description"),
                    ShipmentWeight = m.Field<decimal>("shipment_weight"),
                    ShipmentRateDescription = m.Field<string>("shipment_rate_description"),
                }).ToList()
            };
        }

        public async Task<ApiResponse<List<ShipperModel>>> GetList()
        {
            var list = _dbContext.Shippers.AsQueryable().AsNoTracking();

            return new ApiResponse<List<ShipperModel>>
            {
                Data = await list.Select(m => new ShipperModel { Id = m.ShipperId, Name = m.ShipperName }).ToListAsync()
            };
        }
    }
}
