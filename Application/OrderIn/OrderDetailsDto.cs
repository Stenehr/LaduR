using Application.ProductName;

namespace Application.OrderIn
{
    public class OrderDetailsDto
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public ProductNameDto ProductName { get; set; }
        public int Quantity { get; set; }
        public decimal Price { get; set; }
    }
}
