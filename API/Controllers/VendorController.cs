using Microsoft.AspNetCore.Mvc;
using Application.Vendor;
using MediatR;
using System.Threading.Tasks;
using System.Collections.Generic;

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

        [HttpGet]
        public async Task<ActionResult<IEnumerable<VendorDto>>> Get() =>
            await _mediator.Send(new List.Query());

        [HttpPost]
        public async Task<ActionResult<VendorDto>> Add(Add.Command command) =>
            await _mediator.Send(command);
    }
}