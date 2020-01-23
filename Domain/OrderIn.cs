using System;
using System.Collections.Generic;

namespace Domain
{
    public class OrderIn : OrderBase
    {
        public Vendor Vendor { get; set; }
        public string BillNumber { get; set; }
        public IList<OrderDetails> OrderDetails { get; protected set; } = new List<OrderDetails>();

        public void Update(Vendor vendor, string billNumber, DateTime orderDate, string extraInfo)
        {
            Vendor = vendor;
            BillNumber = billNumber;
            base.Update(orderDate, extraInfo);
        }
    }
}