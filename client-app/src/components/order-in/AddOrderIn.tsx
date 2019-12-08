import React, { useContext } from "react";
import { Form, Button, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import OrderInStore from "../../stores/orderInStore";

const AddOrderIn = () => {
    const orderInStore = useContext(OrderInStore);

    return (
        <div>
            <Header as="h2">Sisseostu lisamine</Header>
            <Button as={Link} to="/add-vendor">Lisa uus ostukoht</Button>
            <Form>
                <Form.Group>
    <h2>{orderInStore.orderIn.vendor ? orderInStore.orderIn.vendor.name : ""}</h2>
                </Form.Group>
            </Form>
        </div>
    )
}

export default observer(AddOrderIn);