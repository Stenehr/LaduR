import React from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { closeVendorModal } from "../../actions/vendorActions";

class VendorForm extends React.Component {
    renderInput({ input, label }) {
        return (
            <Form.Field>
                <label>{label}</label>
                <input {...input} />
            </Form.Field>
        );
    }

    onSubmit = formValues => this.props.onSubmit(formValues);

    render() {
        return (
            <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="name" component={this.renderInput} label="Nimi" />
                <Field name="address" component={this.renderInput} label="Aadress" />
                <Button float="right" primary type="submit">
                    Salvesta
                </Button>
                <Button float="right" type="button" onClick={this.props.closeVendorModal}>
                    Tagasi
                </Button>
            </Form>
        );
    }
}

export default connect(
    null,
    { closeVendorModal }
)(
    reduxForm({
        form: "vendorForm"
    })(VendorForm)
);
