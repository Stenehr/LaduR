using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using FluentValidation;
using MediatR;
using Persistence;

namespace Application.ProductName
{
    public class Edit
    {
        public class Handler : IRequestHandler<Command, ProductNameDto>
        {
            private readonly DataContext _dataContext;
            private readonly IMapper _mapper;

            public Handler(DataContext dataContext, IMapper mapper)
            {
                _dataContext = dataContext;
                _mapper = mapper;
            }

            public async Task<ProductNameDto> Handle(Command request, CancellationToken cancellationToken)
            {
                var productName = await _dataContext.ProductNames.FindAsync(request.Id);

                productName.Name = request.Name;

                await _dataContext.SaveChangesAsync();

                return _mapper.Map<ProductNameDto>(productName);
            }
        }

        public class Command : IRequest<ProductNameDto>
        {
            public int Id { get; set; }
            public string Name { get; set; }
        }

        public class ProductNameEditValidator : AbstractValidator<Command>
        {
            public ProductNameEditValidator() 
            {
                RuleFor(x => x.Name).NotEmpty().WithMessage("Toote nimi on kohustuslik");
            }
        }
    }
}