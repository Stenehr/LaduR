using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain.DataExchange;
using FluentValidation;
using MediatR;
using Persistence;

namespace Application.OrderIn
{
    public class Add
    {
        public class Handler : IRequestHandler<Command, OrderInDto>
        {
            private readonly IMapper _mapper;
            private readonly DataContext _dataContext;
            private readonly IOrderInService _orderInService;

            public Handler(IMapper mapper, DataContext dataContext, IOrderInService orderInService)
            {
                _mapper = mapper;
                _dataContext = dataContext;
                _orderInService = orderInService;
            }

            public async Task<OrderInDto> Handle(Command command, CancellationToken cancellationToken)
            {
                command.Vendor = _dataContext.Vendors.Find(command.VendorId);

                var orderIn = new Domain.OrderIn();
                orderIn.Update(command);

                _orderInService.CreateOrderDetails(orderIn, command.Products);

                _dataContext.OrdersIn.Add(orderIn);
                await _dataContext.SaveChangesAsync();

                return _mapper.Map<OrderInDto>(orderIn);
            }
        }

        public class Command : OrderInBaseCommand, IRequest<OrderInDto>
        { }

        public class OrderInAddValidator : AbstractValidator<Command> 
        {
            public OrderInAddValidator()
            {
                RuleFor(x => x.BillNumber).NotEmpty().WithMessage("Tsekinumber on kohustuslik");
                RuleFor(x => x.VendorId).NotNull().WithMessage("Ostukoht on kohustuslik");
                RuleFor(x => x.Products).NotEmpty().WithMessage("Ostuga ei ole lisatud tooteid");
            }
        }
    }
}
