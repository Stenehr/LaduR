using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Persistence;

namespace Application.ProductName
{
    public class Add
    {
        public class Handler : IRequestHandler<Command, ProductNameDto>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<ProductNameDto> Handle(Command request, CancellationToken cancellationToken)
            {
                var productName = new Domain.ProductName { Name = request.Name };

                _context.ProductNames.Add(productName);
                await _context.SaveChangesAsync();

                return _mapper.Map<ProductNameDto>(productName);
            }
        }

        public class Command : IRequest<ProductNameDto>
        {
            public string Name { get; set; }
        }
    }
}