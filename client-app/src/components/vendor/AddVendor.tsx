import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Button, Form, Icon, Modal } from 'semantic-ui-react';
import { Form as FinalForm, Field } from "react-final-form";

import OrderInStore from '../../stores/orderInStore';
import TextInput from '../common/form/TextInput';
import { Link, RouteComponentProps } from 'react-router-dom';
import { IAddVendor } from './types';
import { SubmitButton } from '../common/form/SubmitButton';

const AddVendor: React.FC<RouteComponentProps> = () => {
    const orderInStore = useContext(OrderInStore);

    const handleFormSubmit = (vendorDto: IAddVendor) => orderInStore.addVendor(vendorDto);

    const loading = orderInStore.loadingVendorAdding;

    return (
        <Modal open size="tiny">
            <Modal.Header>Ostukoha lisamine</Modal.Header>
            <Modal.Content>
                <FinalForm
                    onSubmit={handleFormSubmit}
                    render={({ handleSubmit }) => (
                        <Form id="add-vendor-form" loading={loading} onSubmit={handleSubmit}>
                            <Field name="name" placeholder="Ostukoha nimi" component={TextInput} />
                            <Field name="address" placeholder="Ostukoha aadress" component={TextInput} />
                        </Form>
                    )}
                />
            </Modal.Content>
            <Modal.Actions>
                <Button as={Link} to="/add-order-in" basic color="red">
                    <Icon name="remove" /> Tagasi
                </Button>
                <SubmitButton disabled={loading} form="add-vendor-form" />
            </Modal.Actions>
        </Modal>
    );
};

export default observer(AddVendor);
