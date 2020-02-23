using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.OrderIn
{
    public class Delete
    {
        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IOrderInService _orderInService;

            public Handler(DataContext context, IOrderInService orderInService)
            {
                _context = context;
                _orderInService = orderInService;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var orderIn = await _orderInService.GetOrderInWithDetails(request.Id);

                if (orderIn == null)
                    throw new Exception("Ei leitud sisseostu, mida kustutada");

                _context.Remove(orderIn);
                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }

        public class Command : IRequest
        {
            public Command(int id)
            {
                this.Id = id;

            }
            public int Id { get; }
        }
    }
}