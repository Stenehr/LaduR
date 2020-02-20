using System;
using System.Collections.Generic;
using Domain.DataExchange;

namespace Domain
{
    public class OrderIn : OrderBase
    {
        public Vendor Vendor { get; set; }
        public string BillNumber { get; set; }
        public IList<OrderInDetails> OrderDetails { get; protected set; } = new List<OrderInDetails>();

        public void Update(IOrderInBase orderInBase)
        {
            Vendor = orderInBase.Vendor;
            BillNumber = orderInBase.BillNumber;
            base.Update(orderInBase.OrderDate, orderInBase.ExtraInfo);
        }
    }
}