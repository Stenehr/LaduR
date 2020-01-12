import React, { useContext } from "react";
import { Form, Button, Grid } from "semantic-ui-react";
import { Form as FinalForm, Field } from "react-final-form";
import TextInput from "../common/form/TextInput";
import { observer } from "mobx-react-lite";
import OrderInStore from "../../stores/orderInStore";
import DropdownInput from '../common/form/DropdownInput';
import { IDropdownItem } from '../common/form/types';
import { IProduct } from "../../stores/orderInStore";

export const AddProduct: React.FC<{productNames: IDropdownItem[]}> = ({productNames}) => {
    const orderInStore = useContext(OrderInStore);

    const handleProductSubmit = (product: IProduct) =>  {
        orderInStore.addProduct(product);

    }

    return (
        <div>
            <FinalForm
                initialValues={orderInStore.selectedProduct}
                onSubmit={handleProductSubmit}
                render={(props) => (
                    <Grid>
                        <Grid.Column width={4}>
                            <Form onSubmit={(values) => { props.handleSubmit(values); props.form.reset() }}>
                                <Field name="productNameId" placeholder="Tootenimi" labelText="Tootenimi" component={DropdownInput} width="6rem" options={productNames} />
                                <Field name="price" placeholder="Hind..." labelText="Hind" component={TextInput} width="6rem" inputSuffix="EUR" />
                                <Field name="quantity" placeholder="Kogus..." labelText="Kogus" component={TextInput} width="6rem" inputSuffix="TK"/>
                                <Button positive type="submit">Lisa toode</Button>
                            </Form>
                        </Grid.Column>
                    </Grid>
                )}
            />
        </div>
    );
};

export default observer(AddProduct);
