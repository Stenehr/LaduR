namespace Domain
{
    public class OrderDetails : Entity
    {
        public Product Product { get; set; }
        public int Quantity { get; set; }
    }
}