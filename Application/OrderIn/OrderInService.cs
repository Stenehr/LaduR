using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.OrderIn
{
    public interface IOrderInService
    {
        void CreateOrderDetails(Domain.OrderIn orderIn, IList<ProductDto> productDtos);
        Task<Domain.OrderIn> GetOrderInWithDetails(int orderInId);
    }

    public class OrderInService : IOrderInService
    {
        private readonly DataContext _context;
        public OrderInService(DataContext context)
        {
            this._context = context;
        }

        public async Task<Domain.OrderIn> GetOrderInWithDetails(int orderInId) =>
            await _context.OrdersIn.Include(x => x.OrderDetails)
                                   .ThenInclude(x => x.Product)
                                   .FirstOrDefaultAsync(x => x.Id == orderInId);

        public void CreateOrderDetails(Domain.OrderIn orderIn, IList<ProductDto> productDtos)
        {
            RemovedDetails(orderIn, productDtos);

            var productNameIds = productDtos.Select(x => x.ProductNameId).Distinct().ToList();
            var productNames = _context.ProductNames.Where(x => productNameIds.Contains(x.Id)).ToList();

            foreach (var dto in productDtos.Where(x => x.Id == null))
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

        private void RemovedDetails(Domain.OrderIn orderIn, IList<ProductDto> productDtos)
        {
            var productIdds = productDtos.Where(x => x.Id != null).Select(x => x.Id).ToList();
            var removedDetails = orderIn.OrderDetails.Where(x => !productIdds.Contains(x.Product.Id)).ToList();

            foreach (var orderDetails in removedDetails)
            {
                orderIn.OrderDetails.Remove(orderDetails);
            }
        }
    }
}