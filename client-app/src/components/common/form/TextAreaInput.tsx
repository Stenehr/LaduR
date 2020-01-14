import React from "react";
import { FieldRenderProps } from "react-final-form";
import { FormFieldProps, Form, Label } from "semantic-ui-react";

interface IProps extends FieldRenderProps<string, HTMLElement>, FormFieldProps {
    labelText?: string;
}

const TextAreaInput: React.FC<IProps> = ({ input, width, rows, placeholder, labelText, meta: { error, touched } }) => {
    return (
        <Form.Field error={touched && !!error} width={width}>
            {!!labelText && <label>{labelText}</label>}
            <textarea rows={rows} {...input} placeholder={placeholder} />
            {touched && !!error && (
                <Label pointing="above" basic color="red">
                    {error}
                </Label>
            )}
        </Form.Field>
    );
};

export default TextAreaInput;
