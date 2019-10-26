using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Persistence;

namespace Application.Vendor
{
    public class Add
    {
        public class Handler : IRequestHandler<Command, VendorDto>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;

            }

            public async Task<VendorDto> Handle(Command request, CancellationToken cancellationToken)
            {
                var vendor = new Domain.Vendor(request.Name, request.Address);

                _context.Vendors.Add(vendor);
                await _context.SaveChangesAsync();

                return _mapper.Map<VendorDto>(vendor);
            }
        }

        public class Command : IRequest<VendorDto>
        {
            public string Name { get; set; }
            public string Address { get; set; }
        }
    }
}