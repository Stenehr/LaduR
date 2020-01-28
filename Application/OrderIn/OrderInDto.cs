using System;
using System.Collections.Generic;
using System.Text;
using Application.Vendor;

namespace Application.OrderIn
{
    public class OrderInDto
    {
        public int Id { get; set; }
        public string BillNumber { get; set; }
        public VendorDto Vendor { get; set; }
        public DateTime OrderDate { get; set; }
        public string ExtraInfo { get; set; }
        public IList<OrderDetailsDto> OrderDetails { get; set; }
    }
}
