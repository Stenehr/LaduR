namespace Domain
{
    public class Vendor : Classifier
    {
        public Vendor(string name, string address)
        {
            Name = name;
            Address = address;
        }

        public Vendor() { }
        public string Address { get; set; }
    }
}