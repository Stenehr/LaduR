import React from "react";
import { Dropdown, FormFieldProps } from "semantic-ui-react";
import { FieldRenderProps } from 'react-final-form';

interface IProps extends FieldRenderProps<string | number, HTMLElement>, FormFieldProps {
    options: Array<{ text: string, value: string | number}>
}

const DropdownInput: React.FC<IProps> = (props) => {
    console.log(props);
    return (
        <Dropdown placeholder={props.placeholder} value={props.value} search selection options={props.options} />
    )
}

export default DropdownInput;