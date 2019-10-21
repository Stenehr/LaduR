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

        [HttpPut("{id}")]
        public async Task<ActionResult<ProductNameDto>> Edit(int id, EditProductName.Command command) {
            command.Id = id;
            return await _mediator.Send(command);
        }

    }
}