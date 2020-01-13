import React from "react";
import { FieldRenderProps } from "react-final-form";
import { FormFieldProps, Form, Label } from "semantic-ui-react";

interface IProps extends FieldRenderProps<string, HTMLElement>, FormFieldProps {
    labelText?: string;
    inputSuffix?: string;
}

const TextInput: React.FC<IProps> = ({ input, width, type, placeholder, labelText, inputSuffix, meta: { error, touched } }) => {
    return (
        <Form.Field error={touched && !!error} type={type}>
            {!!labelText && <label>{labelText}</label>}
            <input {...input} placeholder={placeholder} style={{width}} /> <span>{inputSuffix}</span>
            {/* {touched && !!error && (
                <Label basic color="red">
                    {error}
                </Label>
            )} */}
        </Form.Field>
    );
};

export default TextInput;
