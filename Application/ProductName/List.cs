using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.ProductName
{
    public class List
    {
        public class Handler : IRequestHandler<Query, List<ProductNameDto>>
        {
            private readonly DataContext _dataContext;
            private readonly IMapper _mapper;
            public Handler(DataContext dataContext, IMapper mapper)
            {
                _mapper = mapper;
                _dataContext = dataContext;
            }

            public async Task<List<ProductNameDto>> Handle(Query request, CancellationToken cancellationToken)
            {
                var list = await _dataContext.ProductNames.ToListAsync();

                return _mapper.Map<List<ProductNameDto>>(list);
            }
        }

        public class Query : IRequest<List<ProductNameDto>> { }
    }
}