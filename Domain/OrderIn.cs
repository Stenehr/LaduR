using System.Collections.Generic;

namespace Domain
{
    public class OrderIn : OrderBase
    {
        public Vendor Vendor { get; set; }
        public string BillNumber { get; set; }
        public IList<OrderDetails> OrderDetails { get; protected set; } = new List<OrderDetails>();
    }
}