import React, { useContext, useEffect } from 'react'
import DataTable, { IDataTableHeaderItem } from "../common/DataTable";
import { observer } from 'mobx-react-lite';
import OrderInStore from "../../stores/orderInStore";
import { IOrderInListItem, IOrderDetailsListItem } from './types';

const OrdersIn = () => {
    const orderInStore = useContext(OrderInStore);

    useEffect(() => {
        orderInStore.loadOrdersIn();
    }, [orderInStore, !orderInStore.ordersInListLoaded])

    const tableHeader = new Array<IDataTableHeaderItem<IOrderInListItem>>(
        { header: "Ostukoht", field: "vendor", format: (x) => <span>{x.vendor.name} - {x.vendor.address}</span> },
        { header: "Tseki nr", field: "billNumber" },
        { header: "Ostu aeg", field: "orderDate", type: "date" },
        { header: "Lisainfo", field: "extraInfo" }
    );

    const renderRowContent = (item: IOrderInListItem) => {
        const header = new Array<IDataTableHeaderItem<IOrderDetailsListItem>>(
            { header: "Toote nimi", field: "productName", format: (x) => <span>{x.productName.name}</span> },
            { header: "Hind", field: "price" },
            { header: "Kogus", field: "quantity" }
        )

        return (
            <DataTable
                color="blue"
                source={item.orderDetails}
                header={header}
            />
        )
    }

    return (
        <div>
            <DataTable
                source={orderInStore.ordersInList}
                header={tableHeader}
                rowContent={renderRowContent}
            />      
        </div>
    )
}

export default observer(OrdersIn);