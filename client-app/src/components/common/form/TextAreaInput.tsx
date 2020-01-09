import React from "react";
import { FieldRenderProps } from "react-final-form";
import { FormFieldProps, Form, Label } from "semantic-ui-react";

interface IProps extends FieldRenderProps<string, HTMLElement>, FormFieldProps {
    labelText?: string;
}

const TextAreaInput: React.FC<IProps> = ({ input, width, type, placeholder, labelText, meta: { error, touched } }) => {
    return (
        <Form.Field error={touched && !!error} type={type} width={width}>
            {!!labelText && <label>{labelText}</label>}
            <textarea {...input} placeholder={placeholder} />
            {touched && !!error && (
                <Label basic color="red">
                    {error}
                </Label>
            )}
        </Form.Field>
    );
};

export default TextAreaInput;