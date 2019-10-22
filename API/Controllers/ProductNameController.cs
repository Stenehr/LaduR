using System.Collections.Generic;
using System.Threading.Tasks;
using Application.ProductName;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductNameController : ControllerBase
    {
        private readonly IMediator _mediator;
        public ProductNameController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProductNameDto>>> Get() =>
            await _mediator.Send(new List.Query());

        [HttpPut("{id}")]
        public async Task<ActionResult<ProductNameDto>> Edit(int id, Edit.Command command) {
            command.Id = id;
            return await _mediator.Send(command);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Unit>> Delete(int id) =>
            await _mediator.Send(new Delete.Command(id));

    }
}