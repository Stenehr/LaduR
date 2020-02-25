import React from "react";
import { FieldRenderProps } from "react-final-form";
import { FormFieldProps, Form, Icon } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import { inputToDate } from '../../../utils/utils';

interface IProps extends FieldRenderProps<string, HTMLElement>, FormFieldProps {
    labelText?: string;
    inputSuffix?: string;
}

const Datepicker: React.FC<IProps> = ({ input, width, labelText, meta: { error, touched }, ...rest }) => {    
    let datepicker = React.createRef() as any;

    return (
        <Form.Field error={touched && !!error}>
            {!!labelText && <label>{labelText}</label>}
            <DatePicker
                ref={(dp) => datepicker = dp}
                onChange={input.onChange}
                selected={inputToDate(input.value)}
                dateFormat="dd.MM.yyyy"
                onKeyDown={(e) => e.preventDefault()}
            />
            <Icon
                style={{position: "relative", left: "-25px", top: "9px"}} name="calendar alternate outline"
                onClick={() => (datepicker as DatePicker).setOpen(true)}
            />
        </Form.Field>
    )
}

export default Datepicker;
