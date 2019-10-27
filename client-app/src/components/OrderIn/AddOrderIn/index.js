import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { Grid, Button, Dropdown } from "semantic-ui-react";
import AddProductName from "./AddProductName";
import AddVendor from "./AddVendor";
import { openVendorModal, getVendors, resetNewVendorId } from "../../../actions/vendorActions";

function toDropdownSelect(list, valueKey, textKey, additionalTextKey) {
    return _.map(list, item => {
        return {
            key: item[valueKey],
            value: item[valueKey],
            text: !!additionalTextKey ? `${item[textKey]} - ${item[additionalTextKey]}` : [item.textKey]
        };
    });
}

class AddOrderIn extends React.Component {
    state = {
        vendorId: null,
        products: []
    };

    componentDidMount() {
        this.props.getVendors();
    }

    componentDidUpdate() {
        if (this.props.newVendorId) {
            this.setState({
                ...this.state,
                vendorId: this.props.newVendorId
            });

            this.props.resetNewVendorId();
        }
    }

    vendorSelected = (event, { value }) => {
        this.setState({
            ...this.state,
            vendorId: value
        });
    };

    render() {
        return (
            <section>
                <h2>Sisseostu lisamine</h2>
                <hr />
                <Grid.Row>
                    <Grid.Column width={5}>
                        <Dropdown
                            placeholder="vali ostukoht..."
                            fluid
                            search
                            selection
                            value={this.state.vendorId}
                            options={this.props.vendors}
                            onChange={this.vendorSelected}
                        />
                        <Button primary onClick={this.props.openVendorModal}>
                            Lisa ostukoht
                        </Button>
                        <AddVendor />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={5}>
                        <Button primary>Lisa tootenimi</Button>
                        <AddProductName />
                    </Grid.Column>
                </Grid.Row>
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        vendors: toDropdownSelect(state.vendor.list, "id", "name", "address"),
        productNames: toDropdownSelect(state.productName.list, "id", "name"),
        newVendorId: state.vendor.newVendorId
    };
};

export default connect(
    mapStateToProps,
    { openVendorModal, getVendors, resetNewVendorId }
)(AddOrderIn);
