using System;
using System.Linq;
using System.Linq.Expressions;
using System.Threading;
using System.Threading.Tasks;
using Application.Shared;
using AutoMapper;
using MediatR;
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
                var criteria = BuildCriteria(request);

                var ordersIn = _context.OrdersIn.Where(criteria);

                return Task.FromResult(new PagedList<OrderInDto, Domain.OrderIn>(ordersIn, request, _mapper));
            }

            private static Expression<Func<Domain.OrderIn, bool>> BuildCriteria(Query request)
            {
                var criteria = PredicateBuilder.True<Domain.OrderIn>();

                if (request.VendorId != null)
                    criteria = criteria.And(x => x.Vendor.Id == request.VendorId);

                if (!string.IsNullOrEmpty(request.BillNumber))
                    criteria = criteria.And(x => x.BillNumber.Contains(request.BillNumber));

                if (request.StartDate != null)
                    criteria = criteria.And(x => x.OrderDate >= request.StartDate);

                if (request.EndDate != null)
                    criteria = criteria.And(x => x.OrderDate <= request.EndDate);

                return criteria;
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
