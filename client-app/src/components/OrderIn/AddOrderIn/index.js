import React from "react";
import { connect } from "react-redux";
import { Grid, Button } from "semantic-ui-react";
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
                        <Button primary onClick={() => this.setState({...this.state, isProductNameAdding: true})}>Lisa tootenimi</Button>
                    </Grid.Column>
                </Grid.Row>
                {this.state.isProductNameAdding && (
                    <AddProductName />
                )}
            </section>
        );
    }
};

export default connect()(AddOrderIn);