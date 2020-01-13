import React, { useContext } from "react";
import { Form, Button, Grid } from "semantic-ui-react";
import { Form as FinalForm, Field, FormRenderProps } from "react-final-form";
import TextInput from "../common/form/TextInput";
import { observer } from "mobx-react-lite";
import OrderInStore from "../../stores/orderInStore";
import DropdownInput from '../common/form/DropdownInput';
import { IDropdownItem } from '../common/form/types';
import { IProduct } from "../../stores/orderInStore";
import { combineValidators, isRequired, composeValidators, isNumeric } from 'revalidate';
import { customIsRequired, validationMessage } from '../../utils/utils';
import { FormApi, SubmissionErrors } from "final-form";

const validation = combineValidators({
    productNameId: customIsRequired("Tootenimi"),
    price: composeValidators(
        customIsRequired("Hind"),
        // isNumeric(validationMessage("Hind peab olema arv"))
    ),
    quantity: combineValidators(
        customIsRequired("Kogus"),
        // isNumeric(validationMessage("Kogus peab olema arv"))
    )
});

const AddProduct = () => {
    const orderInStore = useContext(OrderInStore);

    const handleProductSubmit = (product: IProduct, form: FormApi<IProduct>, error: any) =>  {
        console.log(product)
        console.log(error());
        // console.log(form)
        if (!error()) {
            orderInStore.addProduct(product);
            form.reset();
        }        
    }

    const productNamesDropdown = orderInStore.dropdownProductNames;

    return (
        <div>
            <FinalForm
                validate={validation}
                initialValues={orderInStore.selectedProduct}
                onSubmit={handleProductSubmit}
                render={({ handleSubmit }) => (
                    <Grid>
                        <Grid.Column width={12}>
                            <Form onSubmit={handleSubmit}>
                                <Field name="productNameId" placeholder="Tootenimi" labelText="Tootenimi" component={DropdownInput} width="6rem" options={productNamesDropdown} />
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
