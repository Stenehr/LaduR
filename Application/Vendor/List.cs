using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Vendor
{
    public class List
    {
        public class Handler : IRequestHandler<Query, List<VendorDto>>
        {
            private readonly IMapper _mapper;
            private readonly DataContext _context;
            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;

            }

            public async Task<List<VendorDto>> Handle(Query request, CancellationToken cancellationToken)
            {
                var vendors = await _context.Vendors.ToListAsync();

                return _mapper.Map<List<VendorDto>>(vendors);
            }
        }

        public class Query : IRequest<List<VendorDto>>
        { }
    }
}