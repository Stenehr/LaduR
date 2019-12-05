import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Button, Form, Icon, Modal } from 'semantic-ui-react';

import OrderInStore from '../../stores/orderInStore';

const AddVendor = () => {
    const orderInStore = useContext(OrderInStore);

    const handleSubmit = (e: any, values: any) => {
        console.log(values);
    };

    return (
        <Modal open size="tiny">
            <Modal.Header>Ostukoha lisamine</Modal.Header>
            <Modal.Content>
                <Form id="add-vendor-form" loading={orderInStore.loadingVendorAdding} onSubmit={handleSubmit}>
                    <Form.Input name="name" label="Nimi" />
                    <Form.Input name="address" label="Aadress" />
                </Form>
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
