import React from "react";
import { Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { getProductNames } from "../../actions/productNameActions";

class ChangeProductName extends React.Component {
    componentDidMount() {
        this.props.getProductNames();
    }

    render() {
        const productNames = this.props.productNames;

        if (!productNames) {
            return <h2>Loading</h2>
        }

        return (
            <Form>
                <Form.Group>
                    <Form.Field label="Toote nimi" control="select">
                        <option>---vali---</option>
                        {productNames.map((productName) => (
                            <option key={productName.id} value={productName}>{productName.name}</option>
                        ))}
                    </Form.Field> 
                </Form.Group>
            </Form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        productNames: Object.values(state.productName)
    }
}

export default connect(
    mapStateToProps,
    { getProductNames }
)(ChangeProductName);

