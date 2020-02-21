import React, { useContext } from "react";
import OrderInStore from "../../stores/orderInStore";
import { Table } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import { DeleteIconButton } from '../common/form/DeleteIconButton';

const ProductTable = () => {
    const orderInStore = useContext(OrderInStore);

    const products = orderInStore.orderIn.products;
    const removeProduct = orderInStore.removeProduct;

    return (
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Tootenimi</Table.HeaderCell>
                    <Table.HeaderCell>Hind</Table.HeaderCell>
                    <Table.HeaderCell>Kogus</Table.HeaderCell>
                    <Table.HeaderCell width="1">Tegevused</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {(products || []).map((product, index) => (
                    <Table.Row key={index}>
                        <Table.Cell>{orderInStore.getProductName(product.productNameId!)}</Table.Cell>
                        <Table.Cell>{product.price} EUR</Table.Cell>
                        <Table.Cell>{product.quantity} TK</Table.Cell>
                        <Table.Cell><DeleteIconButton onClick={() => removeProduct(index)} /></Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    );
};

export default observer(ProductTable);