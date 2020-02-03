using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using Domain;

namespace Application.Shared
{
    public class PagedList<ItemType, DomainType> where ItemType : class
                                                 where DomainType : Entity
    {
        private const int PAGESIZE = 2;
        public List<ItemType> Items { get; set; } = new List<ItemType>();
        public int PageNum { get; set; }
        public int TotalItems { get; set; }
        public int TotalPages { get; set; }

        public PagedList(IQueryable<DomainType> items, IPageableQuery pageableQuery, IMapper mapper)
        {
            TotalItems = items.Count();
            PageNum = pageableQuery.PageNum ?? 1;
            var domainItems = items.Skip((PageNum - 1) * PAGESIZE).Take(PAGESIZE).ToList();
            SetProps(domainItems, pageableQuery, mapper);
        }

        public PagedList(IEnumerable<DomainType> items, IPageableQuery pageableQuery, IMapper mapper)
        {
            TotalItems = items.Count();
            PageNum = pageableQuery.PageNum ?? 1;
            var domainItems = items.Skip((PageNum - 1) * PAGESIZE).Take(PAGESIZE).ToList();
            SetProps(domainItems, pageableQuery, mapper);
        }

        private void SetProps(IList<DomainType> domainItems, IPageableQuery pageableQuery, IMapper mapper)
        {
            this.Items = mapper.Map<List<ItemType>>(domainItems);
            double totalPages = (double)TotalItems / PAGESIZE;
            TotalPages = (int)Math.Ceiling(totalPages);
        }
    }
}