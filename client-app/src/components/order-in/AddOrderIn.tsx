import React, { useContext, useEffect } from "react";
import { Form, Button, Header, Segment } from "semantic-ui-react";
import { Form as FinalForm, Field } from "react-final-form";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import OrderInStore from "../../stores/orderInStore";
import DropdownInput from "../common/form/DropdownInput";
import TextInput from "../common/form/TextInput";

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
                        <Form onSubmit={handleSubmit}>
                            <Form.Group widths="equal" style={{maxWidth: "800px"}}>
                                <Field
                                    name="vendorId"
                                    placeholder="Vali ostukoht..."
                                    labelText="Ostukoht"
                                    options={orderInStore.dropdownVendors}
                                    component={DropdownInput}
                                />
                                <Field
                                    name="orderDate"
                                    labelText="Ostuaeg"
                                    type="date"
                                    component={TextInput}
                                />
                                <Field
                                    name="billNumber"
                                    placeholder="Tšeki nr..."
                                    labelText="Ostutšeki number"
                                    component={TextInput}
                                />
                            </Form.Group>
                            <Button type="submit">Salvesta</Button>
                        </Form>
                    )}
                />
            </Segment>
        </div>
    );
};

export default observer(AddOrderIn);
