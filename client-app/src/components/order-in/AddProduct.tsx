import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Field, Form as FinalForm } from 'react-final-form';
import { combineValidators, composeValidators, isNumeric, createValidator } from 'revalidate';
import { Form, Grid } from 'semantic-ui-react';

import OrderInStore, { IProduct } from '../../stores/orderInStore';
import { customIsRequired, validationMessage, decimalValidator } from '../../utils/utils';
import DropdownInput from '../common/form/DropdownInput';
import SubmitButton from '../common/form/SubmitButton';
import TextInput from '../common/form/TextInput';
import { FormApi } from 'final-form';



const validation = combineValidators({
    productNameId: customIsRequired("Tootenimi"),
    price: composeValidators(
        customIsRequired("Hind"),
        decimalValidator("Hind")
    )(),
    quantity: composeValidators(
        customIsRequired("Kogus"),
        isNumeric(validationMessage("Kogus peab olema täisarv"))
    )()
});

const AddProduct = () => {
    const orderInStore = useContext(OrderInStore);

    const handleProductSubmit = (product: IProduct, form: FormApi<IProduct>) => {
        orderInStore.addProduct(product);
        setTimeout(form.reset);
    }
        

    const productNamesDropdown = orderInStore.dropdownProductNames;

    return (
        <div>
            <FinalForm
                validate={validation}
                initialValues={orderInStore.selectedProduct}
                onSubmit={handleProductSubmit}
                render={({ handleSubmit, invalid, pristine }) => (
                    <Grid>
                        <Grid.Column width={12}>
                            <Form id="add-product-form" onSubmit={handleSubmit}>
                                <Field name="productNameId" placeholder="Tootenimi" labelText="Tootenimi" component={DropdownInput} width="6rem" options={productNamesDropdown} />
                                <Field name="price" type="number" placeholder="Hind..." labelText="Hind" component={TextInput} width="9rem" inputSuffix="EUR" />
                                <Field name="quantity" type="number" placeholder="Kogus..." labelText="Kogus" component={TextInput} width="9rem" inputSuffix="TK"/>
                                <SubmitButton disabled={invalid || pristine} text="Lisa toode" form="add-product-form" />
                            </Form>
                        </Grid.Column>
                    </Grid>
                )}
            />
        </div>
    );
};

export default observer(AddProduct);
