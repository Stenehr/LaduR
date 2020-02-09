import React, { useContext, useEffect } from 'react'
import DataTable, { IDataTableHeaderItem } from "../common/DataTable";
import { observer } from 'mobx-react-lite';
import OrderInStore from "../../stores/orderInStore";
import { IOrderInListItem } from './types';

const OrdersIn = () => {
    const orderInStore = useContext(OrderInStore);

    useEffect(() => {
        orderInStore.loadOrdersIn();
    }, [orderInStore, !orderInStore.ordersInListLoaded])

    const tableHeader = new Array<IDataTableHeaderItem<IOrderInListItem>>(
        { header: "Ostukoht", field: "vendor", format: (x) => <span>{x.vendor.name} - {x.vendor.address}</span> },
        { header: "Tseki nr", field: "billNumber" },
        { header: "Ostu aeg", field: "orderDate" },
        { header: "Lisainfo", field: "extraInfo" }
    );

    return (
        <div>
            <DataTable
                toggler
                source={orderInStore.ordersInList}
                header={tableHeader}
            />      
        </div>
    )
}

export default observer(OrdersIn);