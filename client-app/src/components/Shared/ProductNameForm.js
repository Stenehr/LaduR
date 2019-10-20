import React from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Button, Grid } from "semantic-ui-react";

class ProductNameForm extends React.Component {
    renderInput({ input, label, meta }) {
        return (
            <Form.Field>
                <label>{label}</label>
                <Form.Input fluid {...input} error={meta.touched && meta.error ? meta.error : false} />
            </Form.Field>
        );
    }

    onSubmit = (formValues) => this.props.onSubmit(formValues);

    render() {
        return (
            <Grid>
                {this.props.isChanging && (
                    <Grid.Row>
                        <Grid.Column>
                            Eelmine nimi: <b>{this.props.pastName}</b>
                        </Grid.Column>
                    </Grid.Row>
                )}
                <Grid.Row>
                    <Grid.Column width={6}>
                        <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                            <Field
                                name="name"
                                component={this.renderInput}
                                label={this.props.isChanging ? "Uus nimi" : "Nimi"}
                            />
                            <Button positive type="submit">
                                Salvesta
                            </Button>
                        </Form>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

const validations = formValues => (!formValues.name ? { name: "Toote nimi on kohustuslik" } : {});

export default reduxForm({
    form: "productNameForm",
    validate: validations
})(ProductNameForm);
