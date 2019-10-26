import React from "react";
import { Modal } from "semantic-ui-react";

class SimpleModal extends React.Component {
    render() {
        return (
            <Modal
                trigger={this.props.trigger}
                size={this.props.size}
                closeIcon
            >
                <Modal.Header>{this.props.header}</Modal.Header>
                <Modal.Content>
                    {this.props.children}
                </Modal.Content>
            </Modal>
        );}
}

export default SimpleModal;
