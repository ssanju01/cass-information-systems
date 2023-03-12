using Manager.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/shipper")]
    [ApiController]
    public class ShipperController : ControllerBase
    {
        private readonly IShipperRepository _shipperRepository;

        public ShipperController(IShipperRepository shipperRepository)
        {
            _shipperRepository = shipperRepository;
        }

        [HttpGet("")]
        public async Task<IActionResult> GetAll()
        {
            var response = await _shipperRepository.GetList();
            return Ok(response);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var response = await _shipperRepository.Get(id);
            return Ok(response);
        }
    }
}
