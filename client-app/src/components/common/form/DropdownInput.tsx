import React from "react";
import { FormFieldProps, Form, Label, Select } from "semantic-ui-react";
import { FieldRenderProps } from "react-final-form";
import { IDropdownItem } from "./types";

interface IProps extends FieldRenderProps<string | number, HTMLElement>, FormFieldProps {
    options: IDropdownItem[];
    labelText?: string;
}

const DropdownInput: React.FC<IProps> = ({ input, placeholder, options, width, labelText, meta: { touched, error }}) => {
    return (
        <Form.Field error={touched && !!error}>
            {!!labelText && <label>{labelText}</label>}
            <Select
                placeholder={placeholder}
                value={input.value}
                width={width}
                onChange={(e, data) => input.onChange(data.value)}
                search
                selection
                options={options}
            />
            {touched && error && (
                <Label pointing="above" basic color="red">
                    {error}
                </Label>
            )}
        </Form.Field>
    );
};

export default DropdownInput;
