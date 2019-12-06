import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Button, Form, Icon, Modal } from 'semantic-ui-react';
import { Form as FinalForm, Field } from "react-final-form";

import OrderInStore from '../../stores/orderInStore';
import TextInput from '../common/form/TextInput';

const AddVendor = () => {
    const orderInStore = useContext(OrderInStore);

    const handleFormSubmit = (values: any) => {
        console.log(values);
    };

    return (
        <Modal open size="tiny">
            <Modal.Header>Ostukoha lisamine</Modal.Header>
            <Modal.Content>
                <FinalForm 
                    onSubmit={handleFormSubmit}
                    render={({ handleSubmit }) => (
                        <Form id="add-vendor-form" loading={orderInStore.loadingVendorAdding} onSubmit={handleSubmit}>
                            <Field name="name" placeholder="Ostukoha nimi" component={TextInput} />
                            <Field name="address" placeholder="Ostukoha aadress" component={TextInput} />
                        </Form>
                    )}
                />
            </Modal.Content>
            <Modal.Actions>
                <Button basic color="red">
                    <Icon name="remove" /> Tagasi
                </Button>
                <Button type="submit" form="add-vendor-form" color="green">
                    <Icon name="checkmark" /> Lisa
                </Button>
            </Modal.Actions>
        </Modal>
    );
};

export default observer(AddVendor);
