using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Application.OrderIn;
using MediatR;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrderInController : ControllerBase
    {
        private readonly IMediator _mediator;
        public OrderInController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost]
        public async Task<ActionResult<OrderInDto>> Add(Add.Command command) => await _mediator.Send(command);
    }
}
