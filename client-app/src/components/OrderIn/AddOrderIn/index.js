import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { Grid, Button, Dropdown } from "semantic-ui-react";
import AddProductName from "./AddProductName";
import AddVendor from "./AddVendor";
import { openVendorModal, getVendors, resetNewVendorId } from "../../../actions/vendorActions";
import { getProductNames } from "../../../actions/productNameActions";

function toDropdownSelect(list, valueKey, textKey, additionalTextKey) {
    return _.map(list, item => {
        return {
            key: item[valueKey],
            value: item[valueKey],
            text: !!additionalTextKey ? `${item[textKey]} - ${item[additionalTextKey]}` : item[textKey]
        };
    });
}

class AddOrderIn extends React.Component {
    state = {
        vendorId: null,
        productNameId: null,
        products: []
    };

    componentDidMount() {
        this.props.getVendors();
        this.props.getProductNames();
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
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={2}><h4>Vali ostukoht</h4></Grid.Column>
                        <Grid.Column width={3}>
                            <Dropdown
                                placeholder="vali ostukoht..."
                                search
                                selection
                                value={this.state.vendorId}
                                options={this.props.vendors}
                                onChange={this.vendorSelected}
                            />
                        </Grid.Column>
                        <Grid.Column width={1}>
                            <Button primary onClick={this.props.openVendorModal}>
                                +
                            </Button>
                            <AddVendor />
                        </Grid.Column>
                        <Grid.Column width={4}></Grid.Column>
                        <Grid.Column width={6}><h3>Sisseostu info</h3></Grid.Column>
                    </Grid.Row>
                    <h3>Toote lisamine</h3>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Dropdown
                                placeholder="vali tootenimi..."
                                search
                                selection
                                value={this.state.productNameId}
                                options={this.props.productNames}
                                onChange={this.vendorSelected}
                            />
                        </Grid.Column>
                        <Grid.Column width={1}>
                            <Button primary>+</Button>
                                <AddProductName />
                            </Grid.Column>
                        <Grid.Column width={6} textAlign="right">Detailid</Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={10}>
                            Toote tabel
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        vendors: toDropdownSelect(state.vendor.list, "id", "name", "address"),
        productNames: toDropdownSelect(state.productName.list, "id", "name", null),
        newVendorId: state.vendor.newVendorId
    };
};

export default connect(
    mapStateToProps,
    { openVendorModal, getVendors, getProductNames, resetNewVendorId }
)(AddOrderIn);
