﻿using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Application.OrderIn;
using MediatR;
using Application.Shared;

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

        [HttpGet]
        public async Task<ActionResult<PagedList<OrderInDto, Domain.OrderIn>>> Get([FromRoute]List.Query query) => await _mediator.Send(query);

        [HttpPost]
        public async Task<ActionResult<OrderInDto>> Add(Add.Command command) => await _mediator.Send(command);

        [HttpPut("{id}")]
        public async Task<ActionResult<OrderInDto>> Edit(int id, Edit.Command command) 
        {
            command.Id = id;
            return await _mediator.Send(command);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Unit>> Delete(int id) => await _mediator.Send(new Delete.Command(id));
    }
}
