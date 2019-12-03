namespace Domain
{
    public class ProductName : Entity
    {
        public ProductName()
        {}
        public ProductName(string name)
        {
            Name = name;
        }

        public string Name { get; set; }
    }
}