import React from "react";
import { Dropdown, FormFieldProps, Form, Label } from "semantic-ui-react";
import { FieldRenderProps } from "react-final-form";
import { IDropdownItem } from "./types";

interface IProps extends FieldRenderProps<string | number, HTMLElement>, FormFieldProps {
    options: IDropdownItem[];
}

const DropdownInput: React.FC<IProps> = ({ input, placeholder, options, width, meta: { touched, error }}) => {
    return (
        <Form.Field>
            <Dropdown
                placeholder={placeholder}
                value={input.value}
                width={width}
                onChange={(e, data) => input.onChange(data.value)}
                search
                selection
                options={options}
            />
            {touched && error && (
                <Label basic color="red">
                    {error}
                </Label>
            )}
        </Form.Field>
    );
};

export default DropdownInput;
