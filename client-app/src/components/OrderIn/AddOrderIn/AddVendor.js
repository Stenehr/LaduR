import React from "react";
import { connect } from "react-redux";
import SimpleModal from "../../Shared/SimpleModal";
import VendorForm from "../../Shared/VendorForm";
import { Button, Loader } from "semantic-ui-react";
import { addVendor } from "../../../actions/vendorActions";

class AddVendor extends React.Component {
    onSubmit = formValues =>  {
        this.props.addVendor(formValues);
    }

    render() {
        return (
            <SimpleModal
                trigger={<Button primary>Lisa ostukoht</Button>}
                size="tiny"
                header="Lisa ostukoht"
                open={this.props.vendorModalOpen}
            >
                {this.props.isLoading ? (
                    <Loader active />
                ) : (
                    <VendorForm onCloseModal={this.closeModal} onSubmit={this.onSubmit} />
                )}
            </SimpleModal>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.vendor.isLoading,
        vendorModalOpen: state.vendor.vendorModalOpen
    };
};

export default connect(
    mapStateToProps,
    { addVendor }
)(AddVendor);
