namespace Domain
{
    public class Product : Entity
    {
        public ProductName ProductName { get; set; }
        public int Quantity { get; set; }
        public decimal Price { get; set; }
        public OrderInDetails OrderInDetails { get; set; }
    }
}
