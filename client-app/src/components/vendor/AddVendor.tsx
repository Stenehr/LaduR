import React from "react";
import { Modal, Button, Icon } from "semantic-ui-react";

export default () => {
    

    return (
        <Modal header="Ostukoha lisamine" open>
            <Modal.Content>
                Ostukoha lisamine
            </Modal.Content>
            <Modal.Actions>
                <Button basic color="red">
                    <Icon name="remove" /> Tagasi
                </Button>
                <Button color="green">
                    <Icon name="checkmark" /> Lisa
                </Button>
            </Modal.Actions>
        </Modal>
    );
};
