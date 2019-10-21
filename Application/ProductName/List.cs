using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
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
            public Handler(DataContext dataContext)
            {
                _dataContext = dataContext;
            }

            public async Task<List<ProductNameDto>> Handle(Query request, CancellationToken cancellationToken)
            {
                var list = await _dataContext.ProductNames.ToListAsync();

                return list.Select(pn => new ProductNameDto{ Id = pn.Id, Name = pn.Name}).ToList();
            }
        }

        public class Query : IRequest<List<ProductNameDto>> { }
    }
}