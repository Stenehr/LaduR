import React, { useContext } from "react";
import OrderInStore from "../../stores/orderInStore";
import { Table } from "semantic-ui-react";
import { observer } from "mobx-react-lite";

const ProductTable = () => {
    const orderInStore = useContext(OrderInStore);

    const products = orderInStore.orderIn.products;

    return (
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Tootenimi</Table.HeaderCell>
                    <Table.HeaderCell>Hind</Table.HeaderCell>
                    <Table.HeaderCell>Kogus</Table.HeaderCell>
                    <Table.HeaderCell>Tegevused</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {(products || []).map((product, index) => (
                    <Table.Row key={index}>
                        <Table.Cell>{orderInStore.getProductName(product.productNameId!)}</Table.Cell>
                        <Table.Cell>{product.price}</Table.Cell>
                        <Table.Cell>{product.quantity}</Table.Cell>
                        <Table.Cell>X</Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    );
};

export default observer(ProductTable);