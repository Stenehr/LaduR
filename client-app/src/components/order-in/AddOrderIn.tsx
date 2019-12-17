import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Field, Form as FinalForm } from "react-final-form";
import { Link } from "react-router-dom";
import { Button, Form, Header, Segment, Container } from "semantic-ui-react";

import OrderInStore from "../../stores/orderInStore";
import DropdownInput from "../common/form/DropdownInput";
import TextAreaInput from "../common/form/TextAreaInput";
import TextInput from "../common/form/TextInput";
import AddProduct from "./AddProduct";
import BottomComponent from "../common/BottomComponent";

const AddOrderIn = () => {
    const orderInStore = useContext(OrderInStore);
    const vendorsLoaded = orderInStore.vendorsLoaded;

    useEffect(() => {
        orderInStore.loadVendors();
    }, [orderInStore, !vendorsLoaded]);

    const handleFormSubmit = (values: any) => {
        console.log("submit");
        console.log(values);
    };

    return (
        <div>
            <Header as="h2">Sisseostu lisamine</Header>
            <Button as={Link} to="/add-vendor">
                Lisa uus ostukoht
            </Button>
            <Segment>
                <FinalForm
                    initialValues={orderInStore.orderIn}
                    onSubmit={handleFormSubmit}
                    render={({ handleSubmit }) => (
                        <Form id="order-in-form" onSubmit={handleSubmit}>
                            <h3>Ostukohainfo</h3>
                            <Form.Group widths="equal">
                                <Field
                                    name="vendorId"
                                    placeholder="Vali ostukoht..."
                                    labelText="Ostukoht"
                                    options={orderInStore.dropdownVendors}
                                    component={DropdownInput}
                                />
                                <Field name="orderDate" labelText="Ostuaeg" type="date" component={TextInput} />
                                <Field
                                    name="billNumber"
                                    placeholder="Tšeki nr..."
                                    labelText="Ostutšeki number"
                                    component={TextInput}
                                />
                            </Form.Group>
                            <BottomComponent>
                                <Container>
                                    <Segment>
                                        <Button type="submit" form="order-in-form">
                                            Salvesta
                                        </Button>
                                    </Segment>
                                </Container>
                            </BottomComponent>
                        </Form>
                    )}
                />
                <h3>Tooteinfo</h3>
                <AddProduct />
            </Segment>
        </div>
    );
};

export default observer(AddOrderIn);
