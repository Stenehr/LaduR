using AutoMapper;
using MediatR;
using Persistence;
using Domain;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace Application.OrderIn
{
    public class Add
    {
        public class Handler : IRequestHandler<Command, OrderInDto>
        {
            private readonly OrderInService _orderInService;
            private readonly IMapper _mapper;

            public Handler(OrderInService orderInService, IMapper mapper)
            {
                _orderInService = orderInService;
                _mapper = mapper;
            }

            public async Task<OrderInDto> Handle(Command request, CancellationToken cancellationToken)
            {
                await _orderInService.Create(request);

                return new OrderInDto();
            }
        }

        public class Command : IRequest<OrderInDto>
        {
            public string BillNumber { get; set; }
            public int VendorId { get; set; }
            public DateTime OrderDate { get; set; }
            public string ExtraInfo { get; set; }
            public IList<ProductDto> Products { get; set; }
        }
    }
}
