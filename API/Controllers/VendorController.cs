using Microsoft.AspNetCore.Mvc;
using Application.Vendor;
using MediatR;
using System.Threading.Tasks;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class VendorController : ControllerBase
    {
        private readonly IMediator _mediator;
        public VendorController(IMediator mediator)
        {
            _mediator = mediator;

        }

        [HttpPost]
        public async Task<ActionResult<VendorDto>> Add(Add.Command command) =>
            await _mediator.Send(command);
    }
}