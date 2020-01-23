using System;

namespace Domain
{
    public abstract class OrderBase : Entity
    {
        public DateTime OrderDate { get; set;}
        public string ExtraInfo { get; set; }

        public void Update(DateTime orderDate, string extraInfo)
        {
            OrderDate = orderDate;
            ExtraInfo = extraInfo;
        }
    }
}