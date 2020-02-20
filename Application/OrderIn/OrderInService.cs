using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Persistence;

namespace Application.OrderIn
{
    public interface IOrderInService
    {
        void CreateOrderDetails(Domain.OrderIn orderIn, IList<ProductDto> productDtos);
    }

    public class OrderInService : IOrderInService
    {
        private readonly DataContext _context;
        public OrderInService(DataContext context)
        {
            this._context = context;
        }

        public void CreateOrderDetails(Domain.OrderIn orderIn, IList<ProductDto> productDtos) 
        {
            var productNameIds = productDtos.Select(x => x.ProductNameId).Distinct().ToList();
            var productNames = _context.ProductNames.Where(x => productNameIds.Contains(x.Id)).ToList();

            foreach (var dto in productDtos)
            {
                var product = new Domain.Product
                {
                    Price = dto.Price,
                    ProductName = productNames.Single(x => x.Id == dto.ProductNameId),
                    Quantity = dto.Quantity
                };

                var orderDetails = new Domain.OrderInDetails
                {
                    Product = product,
                    Quantity = product.Quantity
                };

                orderIn.OrderDetails.Add(orderDetails);
            }
        }
    }
}