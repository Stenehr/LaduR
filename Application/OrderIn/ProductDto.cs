namespace Application.OrderIn
{
    public class ProductDto
    {
        public int? Id { get; set; }
        public int ProductNameId { get; set; }
        public int Quantity { get; set; }
        public decimal Price { get; set; }
    }
}
