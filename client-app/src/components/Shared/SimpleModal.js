import React from "react";
import { Modal } from "semantic-ui-react";

class SimpleModal extends React.Component {


    render() {
        const simpleModalEl = document.querySelector("#simple-modal");
        console.log(simpleModalEl);
        return (
            <Modal
                trigger={this.props.trigger}
                mountNode={simpleModalEl}
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
