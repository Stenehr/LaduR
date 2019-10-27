import React from "react";
import { Modal } from "semantic-ui-react";

class SimpleModal extends React.Component {
    render() {
        return (
            <Modal
                open={this.props.open}
                size={this.props.size}
            >
                <Modal.Header>{this.props.header}</Modal.Header>
                <Modal.Content>
                    {this.props.children}
                </Modal.Content>
            </Modal>
        );}
}

export default SimpleModal;
