using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Persistence;

namespace Application.OrderIn
{
    public class OrderInService
    {
        private readonly DataContext _context;
        public OrderInService(DataContext context)
        {
            this._context = context;

        }

        public async Task<Domain.OrderIn> Create(Add.Command command)
        {
            var vendor = _context.Vendors.Find(command.VendorId);
            var orderIn = new Domain.OrderIn();
            orderIn.Update(vendor, command.BillNumber, command.OrderDate, command.ExtraInfo);
            CreateOrderDetails(orderIn, command.Products);

            _context.OrdersIn.Add(orderIn);
            await _context.SaveChangesAsync();
            return orderIn;
        }

        private void CreateOrderDetails(Domain.OrderIn orderIn, IList<ProductDto> productDtos) 
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

                var orderDetails = new Domain.OrderDetails
                {
                    Product = product,
                    Quantity = product.Quantity
                };

                orderIn.OrderDetails.Add(orderDetails);
            }
        }
    }
}