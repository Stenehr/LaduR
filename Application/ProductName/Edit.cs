using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.ProductName
{
    public class Edit
    {
        public class Handler : IRequestHandler<Command, ProductNameDto>
        {
            private readonly DataContext _dataContext;
            public Handler(DataContext dataContext)
            {
                _dataContext = dataContext;
            }

            public async Task<ProductNameDto> Handle(Command request, CancellationToken cancellationToken)
            {
                var productName = await _dataContext.ProductNames.FindAsync(request.Id);

                productName.Name = request.Name;

                await _dataContext.SaveChangesAsync();

                return new ProductNameDto 
                {
                    Id = productName.Id,
                    Name = productName.Name
                };
            }
        }

        public class Command : IRequest<ProductNameDto>
        {
            public int Id { get; set; }
            public string Name { get; set; }
        }
    }
}