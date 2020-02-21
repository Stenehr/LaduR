using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Shared;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.OrderIn
{
    public class List
    {
        public class Handler : IRequestHandler<Query, PagedList<OrderInDto, Domain.OrderIn>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            
            public Handler(DataContext context, IMapper mapper)
            {
                this._mapper = mapper;
                this._context = context;
            }

            public Task<PagedList<OrderInDto, Domain.OrderIn>> Handle(Query request, CancellationToken cancellationToken)
            {
                var ordersIn = _context.OrdersIn
                    .Include(x => x.Vendor)
                    .Include(x => x.OrderDetails).ThenInclude(od => od.Product).ThenInclude(p => p.ProductName)
                    .AsQueryable();

                if (request.VendorId != null)
                    ordersIn = ordersIn.Where(x => x.Vendor.Id == request.VendorId);

                if (!string.IsNullOrEmpty(request.BillNumber))
                    ordersIn = ordersIn.Where(x => x.BillNumber.Contains(request.BillNumber));

                if (request.StartDate != null)
                    ordersIn = ordersIn.Where(x => x.OrderDate >= request.StartDate);

                if (request.EndDate != null)
                    ordersIn = ordersIn.Where(x => x.OrderDate <= request.EndDate);

                return Task.FromResult(new PagedList<OrderInDto, Domain.OrderIn>(ordersIn, request, _mapper));
            }
        }

        public class Query : IRequest<PagedList<OrderInDto, Domain.OrderIn>>, IPageableQuery
        {
            public long? VendorId { get; set; }
            public string BillNumber { get; set; }
            public DateTime? StartDate { get; set; }
            public DateTime? EndDate { get; set; }
            public int? PageNum { get; set; }
        }
    }
}
