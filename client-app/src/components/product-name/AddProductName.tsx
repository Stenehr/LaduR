import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite';
import { Button, Form, Icon, Modal } from 'semantic-ui-react';
import { Form as FinalForm, Field } from "react-final-form";
import OrderInStore from "../../stores/orderInStore";
import { IAddProductName } from './types';
import TextInput from '../common/form/TextInput';
import { Link } from 'react-router-dom';
import { SubmitButton } from '../common/form/SubmitButton';

const AddProductName = () => {
    const orderInStore = useContext(OrderInStore);

    const handleFormSubmit = (productNameDto: IAddProductName) => orderInStore.addProductName(productNameDto);

    const loading = orderInStore.loadingProductNameAdding;

    return (
        <Modal open size="tiny">
            <Modal.Header>Tootenime lisamine</Modal.Header>
            <Modal.Content>
                <FinalForm
                    onSubmit={handleFormSubmit}
                    render={({ handleSubmit }) => (
                        <Form id="add-product-name" loading={loading} onSubmit={handleSubmit} >
                            <Field name="name" placeholder="Toote nimi" component={TextInput} />
                        </Form>
                    )}
                />
            </Modal.Content>
            <Modal.Actions>
                <Button as={Link} to="/add-order-in" basic color="red">
                    <Icon name="remove" /> Tagasi
                </Button>
                <SubmitButton disabled={loading} form="add-product-name" />
            </Modal.Actions>
        </Modal>
    )
}


export default observer(AddProductName);