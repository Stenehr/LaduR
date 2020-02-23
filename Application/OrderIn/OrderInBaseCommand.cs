using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Domain.DataExchange;

namespace Application.OrderIn
{
    public class OrderInBaseCommand : IOrderInBase
    {
        public string BillNumber { get; set; }

            [JsonIgnore]
            public Domain.Vendor Vendor { get; set; }
            public int VendorId { get; set; }
            public DateTime OrderDate { get; set; }
            public string ExtraInfo { get; set; }
            public IList<ProductDto> Products { get; set; }
    }
}