import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Field, Form as FinalForm } from "react-final-form";
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Form, Header, Segment, Container, Grid } from "semantic-ui-react";

import OrderInStore from "../../stores/orderInStore";
import DropdownInput from "../common/form/DropdownInput";
import TextAreaInput from "../common/form/TextAreaInput";
import TextInput from "../common/form/TextInput";
import AddProduct from "./AddProduct";
import BottomComponent from "../common/BottomComponent";
import ProductTable from "./ProductTable";
import { combineValidators } from "revalidate";
import { customIsRequired } from "../../utils/utils";
import Datepicker from "../common/form/Datepicker";
import { IOrderInBase } from "../../stores/orderInStore";
import { toast } from "react-toastify";

const validation = combineValidators({
    vendorId: customIsRequired("Ostukoht"),
    billNumber: customIsRequired("Tseki nr"),
    orderDate: customIsRequired("Kuupäev")
});

interface IEditParams {
    id: string
}

const AddOrderIn: React.FC<RouteComponentProps<IEditParams>> = ({ match }) => {
    const orderInStore = useContext(OrderInStore);
    const vendorsLoaded = orderInStore.vendorsLoaded;
    const productNamesLoaded = orderInStore.productNamesLoaded;

    useEffect(() => {
        orderInStore.loadVendors();
        orderInStore.loadProductNames();
        if (match.params.id) {
            orderInStore.setEditOrderInItem(match.params.id);
        }
    }, [orderInStore, !vendorsLoaded, !productNamesLoaded]);

    const handleFormSubmit = (orderInForm: IOrderInBase) => {
        if ((orderInStore.orderIn.products || []).length < 1) {
            toast.error("Sisseostul puuduvad tooted");
            return;
        }
        orderInStore.saveOrderIn(orderInForm);
    };

    return (
        <div>
            <Header as="h2">Sisseostu lisamine</Header>
            <Button as={Link} to="/add-vendor" color="twitter">
                Lisa uus ostukoht
            </Button>
            <Button as={Link} to="/add-product-name" color="twitter">
                Lisa tootenimi
            </Button>
            <Segment raised loading={orderInStore.orderInSavingLoading}>
                <FinalForm
                    validate={validation}
                    initialValues={orderInStore.orderIn}
                    onSubmit={handleFormSubmit}
                    render={({ handleSubmit, invalid, pristine }) => (
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
                                <Field
                                    name="orderDate"
                                    labelText="Ostuaeg"
                                    component={Datepicker}
                                    onChange={(data: any) => console.log(data)}
                                />
                                <Field
                                    name="billNumber"
                                    placeholder="Tšeki nr..."
                                    labelText="Ostutšeki number"
                                    component={TextInput}
                                />
                            </Form.Group>
                            <Field
                                name="extraInfo"
                                placeholder="Lisainfo..."
                                labelText="Lisainfo"
                                rows="3"
                                component={TextAreaInput}
                            />
                            <BottomComponent>
                                <Container>
                                    <Segment raised style={{ marginTop: "1rem" }}>
                                        <Button
                                            disabled={invalid || pristine}
                                            type="submit"
                                            primary
                                            form="order-in-form"
                                        >
                                            Salvesta
                                        </Button>
                                    </Segment>
                                </Container>
                            </BottomComponent>
                        </Form>
                    )}
                />
                <h3>Tooteinfo</h3>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={6}>
                            <AddProduct />
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <ProductTable />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>
    );
};

export default observer(AddOrderIn);
