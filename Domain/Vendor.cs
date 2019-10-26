namespace Domain
{
    public class Vendor : Entity
    {
        public Vendor(string name, string address)
        {
            this.Name = name;
            this.Address = address;

        }

        public Vendor() { }

        public string Name { get; set; }
        public string Address { get; set; }
    }
}