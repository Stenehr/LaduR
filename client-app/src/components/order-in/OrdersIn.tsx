import React, { useContext, useEffect, useState } from 'react'
import DataTable, { IDataTableHeaderItem } from "../common/DataTable";
import { observer } from 'mobx-react-lite';
import OrderInStore from "../../stores/orderInStore";
import { IOrderInListItem, IOrderDetailsListItem } from './types';
import { Button, Confirm } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const OrdersIn = () => {
    const orderInStore = useContext(OrderInStore);

    const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
    const [deleteItemId, setDeleteItemId] = useState<number | null>(null);

    useEffect(() => {
        orderInStore.loadOrdersIn();
    }, [orderInStore, !orderInStore.ordersInListLoaded])

    const setDeleteItemUp = (itemId: number) => {
        setDeleteConfirmOpen(true);
        setDeleteItemId(itemId);
    } 

    const confirmDelete = () => {
        orderInStore.deleteOrderIn(deleteItemId!);
        setDeleteConfirmOpen(false);
        setDeleteItemId(null);
    }

    const cancelDelete = () => {
        setDeleteConfirmOpen(false);
        setDeleteItemId(null);
    }

    const renderActivites = (item: IOrderInListItem) => {
        return (
            <Button.Group compact size="tiny">
                <Button onClick={() => setDeleteItemUp(item.id)} icon="delete" color="red"/>
                <Button as={Link} to={`/edit-order-in/${item.id}`} icon="pencil alternate" color="orange" />
            </Button.Group>
        )
    }

    const tableHeader = new Array<IDataTableHeaderItem<IOrderInListItem>>(
        { header: "Ostukoht", field: "vendor", format: (x) => <span>{x.vendor.name} - {x.vendor.address}</span> },
        { header: "Tseki nr", field: "billNumber" },
        { header: "Ostu aeg", field: "orderDate", type: "date" },
        { header: "Lisainfo", field: "extraInfo" },
        { header: "Tegevused", field: "tegevused", format: renderActivites, width: "20px" }
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
            <Confirm
                open={deleteConfirmOpen}
                content="Olete kindel, et soovite kustutada?"
                cancelButton="Tagasi"
                confirmButton="Kinnita"
                onConfirm={confirmDelete}
                onCancel={cancelDelete}
            />
        </div>
    )
}

export default observer(OrdersIn);