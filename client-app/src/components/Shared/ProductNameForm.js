import React from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Input } from "semantic-ui-react";

class ProductNameForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isChanging: props.isChanging  || false
        }
    }

    renderInput({ input }) {
        return <Input {...input} /> 
    }

    render() {
        return (
            <Form>
                <Form.Field inline>
                    <label>{this.props.isChanging ? "Uus" : ""} nimi</label>
                    <Field name="name" component={this.renderInput} />
                    
                </Form.Field>
            </Form>
        );
    }

}

export default reduxForm({
    form: "changeProductName"
})(ProductNameForm)