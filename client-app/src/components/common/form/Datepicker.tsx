import React, { useState } from "react";
import { FieldRenderProps } from "react-final-form";
import { FormFieldProps, Form, Icon } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import { inputToDate } from "../../../utils/utils";

interface IProps extends FieldRenderProps<string, HTMLElement>, FormFieldProps {
    labelText?: string;
    inputSuffix?: string;
}

const Datepicker: React.FC<IProps> = ({ input, width, labelText, meta: { error, touched }, ...rest }) => {
    let datepicker = React.createRef() as any;

    const initialCalendarIconStyle = { position: "relative", left: "-25px", top: "9px" };

    const [calenderIconStyle, setCalenderIconStyle] = useState<object>(initialCalendarIconStyle);

    const datepickerOpen = (open: boolean) => {
        const style = !open ? initialCalendarIconStyle : { display: "none" };
        setCalenderIconStyle(style);
    };

    return (
        <Form.Field error={touched && !!error}>
            {!!labelText && <label>{labelText}</label>}
            <DatePicker
                ref={dp => (datepicker = dp)}
                onChange={input.onChange}
                selected={inputToDate(input.value)}
                dateFormat="dd.MM.yyyy"
                onKeyDown={e => e.preventDefault()}
                onCalendarClose={() => datepickerOpen(false)}
                onCalendarOpen={() => datepickerOpen(true)}
            />
            <Icon
                style={calenderIconStyle}
                name="calendar alternate outline"
                onClick={() => (datepicker as DatePicker).setOpen(true)}
            />
        </Form.Field>
    );
};

export default Datepicker;
