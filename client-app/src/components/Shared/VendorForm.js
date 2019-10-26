import React from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Button } from "semantic-ui-react";

class VendorForm extends React.Component {

    renderInput({ input, label }) {
        return (
            <Form.Field>
                <label>{label}</label>
                <input {...input} />
            </Form.Field>
        );
    }

    onSubmit = (formValues) => this.props.onSubmit(formValues);

    render() {
        return (
            <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="name" component={this.renderInput} label="Nimi" />
                <Field name="address" component={this.renderInput} label="Aadress" />
                <Button float="right" primary type="submit">Salvesta</Button>
            </Form>
        );
    }
}

export default reduxForm({
    form: "vendorForm"
})(VendorForm);
