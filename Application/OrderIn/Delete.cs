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
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var orderIn = await _context.OrdersIn
                    .Include(x => x.OrderDetails)
                    .ThenInclude(od => od.Product)
                    .FirstOrDefaultAsync(x => x.Id == request.Id);

                if (orderIn == null)
                    throw new Exception("Ei leitud toote nime, mida kustutada");

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