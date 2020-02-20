using System.Collections.Generic;

namespace Domain
{
    public class ProductName : Classifier
    {
        public ProductName()
        {}
        public ProductName(string name)
        {
            Name = name;
        }

        public IList<Product> Products { get; set; }
    }
}