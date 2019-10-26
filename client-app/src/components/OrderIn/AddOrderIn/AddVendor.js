import React from "react";
import { connect } from "react-redux";
import SimpleModal from "../../Shared/SimpleModal";
import VendorForm from "../../Shared/VendorForm";
import { Button, Loader } from "semantic-ui-react";
import { addVendor } from "../../../actions/vendorActions";

class AddVendor extends React.Component {
    onSubmit = (formValues) => this.props.addVendor(formValues);

    render() {
        return (
            <SimpleModal trigger={<Button primary>Lisa ostukoht</Button>} size="tiny" header="Lisa ostukoht">
                {this.props.isLoading ?
                        <Loader active />
                    :
                        <VendorForm onSubmit={this.onSubmit} />
                }
            </SimpleModal>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading
    }
} 

export default connect(
    mapStateToProps,
    { addVendor }
)(AddVendor);
