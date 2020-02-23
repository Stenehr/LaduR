using System;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Persistence;

namespace Application.OrderIn
{
    public class Edit
    {
        public class Handler : IRequestHandler<Command, OrderInDto>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            private readonly IOrderInService _orderInService;

            public Handler(DataContext context, IMapper mapper, IOrderInService orderInService)
            {
                this._orderInService = orderInService;
                this._mapper = mapper;
                this._context = context;
            }

            public async Task<OrderInDto> Handle(Command command, CancellationToken cancellationToken)
            {
                command.Vendor = _context.Vendors.Find(command.VendorId);

                var orderIn = await _orderInService.GetOrderInWithDetails(command.Id);

                if (orderIn == null)
                    throw new Exception("Ei leitud sisseostu, mida muuta");

                orderIn.Update(command);
                _orderInService.CreateOrderDetails(orderIn, command.Products);
                await _context.SaveChangesAsync();

                return _mapper.Map<OrderInDto>(orderIn);
            }
        }

        public class Command : OrderInBaseCommand, IRequest<OrderInDto>
        {
            public int Id { get; set; }
        }
    }
}