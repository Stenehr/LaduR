import _ from "lodash";
import React from "react";
import { Grid, Dropdown } from "semantic-ui-react";
import { connect } from "react-redux";
import { getProductNames, editProductName } from "../../actions/productNameActions";

import ProductNameForm from "../Shared/ProductNameForm";

class EditProductName extends React.Component {
    state = {
        selectedProduct: null
    };

    componentDidMount() {
        this.props.getProductNames();
    }

    handleChange = (e, { value }) => {
        this.setState({
            selectedProduct: _.find(this.props.productNames, productName => productName.id === value)
        });
        console.log(this.state);
    };

    onSubmit = (values) => {
        this.props.editProductName(this.state.selectedProduct.id, values.name);
    }

    render() {
        const productNames = this.props.productNames;

        if (!productNames) {
            return <h2>Loading</h2>;
        }

        const productNamesToDrodownSelect = productNames.map(productName => {
            return {
                key: productName.id,
                value: productName.id,
                text: productName.name
            };
        });

        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <h2>Toote nime muutmine</h2>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={7}>
                        <Dropdown
                            placeholder="vali toote nimi..."
                            fluid
                            search
                            selection
                            options={productNamesToDrodownSelect}
                            onChange={this.handleChange}
                        />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={16}>
                        {this.state.selectedProduct && (
                            <ProductNameForm
                                initialValues={{ ...this.state.selectedProduct }}
                                isChanging
                                pastName={this.state.selectedProduct.name}
                                onSubmit={this.onSubmit}
                            />
                        )}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

const mapStateToProps = state => {
    return {
        productNames: Object.values(state.productNames.list),
        nameChanged: state.productNames.changeSuccessful
    };
};

export default connect(
    mapStateToProps,
    {
        getProductNames,
        editProductName
    }
)(EditProductName);
