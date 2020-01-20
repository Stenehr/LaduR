import React from "react";
import { FieldRenderProps } from "react-final-form";
import { FormFieldProps, Form, Label } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import { dateToString } from '../../../utils/utils';

interface IProps extends FieldRenderProps<string, HTMLElement>, FormFieldProps {
    labelText?: string;
    inputSuffix?: string;
    onChange: (data: any) => void;
}

const Datepicker: React.FC<IProps> = ({ input, width, labelText, onChange, meta: { error, touched }, ...rest }) => {    
    return (
        <Form.Field error={touched && !!error}>
            {!!labelText && <label>{labelText}</label>}
            <DatePicker
                onChange={input.onChange}
                value={dateToString(input.value)}
            />
        </Form.Field>
    )
}

export default Datepicker;
