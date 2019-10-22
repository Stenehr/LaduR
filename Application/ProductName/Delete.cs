using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.ProductName
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
                var productName = await _context.ProductNames.FindAsync(request.Id);
                if (productName == null)
                    throw new Exception("Ei leitud toote nime, mida kustutada");

                _context.Remove(productName);
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