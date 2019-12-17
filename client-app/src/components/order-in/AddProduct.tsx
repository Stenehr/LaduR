import React from "react";
import { Form, Button, Grid } from "semantic-ui-react";
import { Form as FinalForm, Field } from "react-final-form";
import TextInput from "../common/form/TextInput";
import { observer } from "mobx-react-lite";

export const AddProduct: React.FC = () => {
    const handleProductSubmit = (values: any) => {
        console.log(values);
    };

    return (
        <div>
            <FinalForm
                onSubmit={handleProductSubmit}
                render={({ handleSubmit }) => (
                    <Grid>
                        <Grid.Column width={4}>
                            <Form onSubmit={handleSubmit}>
                                <Field name="price" placeholder="Hind..." labelText="Hind" component={TextInput} width="6rem" inputSuffix="EUR" />
                                <Field name="quantity" placeholder="Kogus..." labelText="Kogus" component={TextInput} width="6rem" inputSuffix="TK"/>
                                <Button positive type="submit">Lisa toode</Button>
                            </Form>
                        </Grid.Column>
                    </Grid>
                )}
            />
        </div>
    );
};

export default observer(AddProduct);
