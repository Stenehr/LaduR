using AutoMapper;

namespace Application.Vendor
{
    public class VendorMappingProfile : Profile
    {
        public VendorMappingProfile()
        {
            CreateMap<Domain.Vendor, VendorDto>();
        }
    }
}