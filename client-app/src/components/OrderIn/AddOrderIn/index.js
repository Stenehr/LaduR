import React from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import AddProductName from "./AddProductName";

class AddOrderIn extends React.Component {
    state = {
        vendor: null,
        products: [],
        isProductNameAdding: false
    }

    render() {
        return (
            <section>
                <h2>Sisseostu lisamine</h2>
                <hr />
                <Grid.Row>
                    <Grid.Column width={5}>
                        <AddProductName />
                    </Grid.Column>
                </Grid.Row>
            </section>
        );
    }
};

export default connect()(AddOrderIn);