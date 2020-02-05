import React from 'react'
import DataTable, { IDataTableHeaderItem } from "../common/DataTable";

export const OrdersIn = () => {
    const tableHeader = new Array<IDataTableHeaderItem>(
        { header: "Ostukoht", field: "vendor" },
        { header: "Tseki nr", field: "billNumber" },
        { header: "Ostu aeg", field: "orderDate" },
        { header: "Lisainfo", field: "extraInfo" }
    );

    const items = new Array<any>(
        { vendor: "kodukoht", extraInfo: "lisainf", billNumber: "AA222", orderDate: "12.01.2022" },
        { orderDate: "12.01.1988", vendor: "kodukoht2", extraInfo: "lisainf2", billNumber: "AA222" }
    )

    return (
        <div>
            <DataTable
                items={items}
                pageNum={1}
                totalPages={2}
                header={tableHeader}
            />      
        </div>
    )
}
