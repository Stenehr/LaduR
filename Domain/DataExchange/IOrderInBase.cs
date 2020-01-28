using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.DataExchange
{
    public interface IOrderInBase
    {
        public string BillNumber { get; set; }
        public Vendor Vendor { get; set; }
        public DateTime OrderDate { get; set; }
        public string ExtraInfo { get; set; }
    }
}
