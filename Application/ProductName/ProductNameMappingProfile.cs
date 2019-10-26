using AutoMapper;

namespace Application.ProductName
{
    public class ProductNameMappingProfile : Profile
    {
        public ProductNameMappingProfile()
        {
            CreateMap<Domain.ProductName, ProductNameDto>();
        }
    }
}