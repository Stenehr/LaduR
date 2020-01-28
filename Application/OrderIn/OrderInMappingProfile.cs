using AutoMapper;

namespace Application.OrderIn
{
    public class OrderInMappingProfile : Profile
    {
        public OrderInMappingProfile()
        {
            CreateMap<Domain.OrderIn, OrderInDto>();

            CreateMap<Domain.OrderDetails, OrderDetailsDto>()
                .ForMember(x => x.Price, opt => opt.MapFrom(x => x.Product.Price))
                .ForMember(x => x.ProductId, opt => opt.MapFrom(x => x.Product.Id))
                .ForMember(x => x.ProductName, opt => opt.MapFrom(x => x.Product.ProductName));
        }
    }
}