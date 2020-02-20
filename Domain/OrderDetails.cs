namespace Domain
{
    public abstract class OrderDetails : Entity
    {
        public Product Product { get; set; }
        public int ProductId { get;set; }
        public int Quantity { get; set; }
    }
}