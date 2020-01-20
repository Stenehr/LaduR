import React from "react";
import { Button, Icon } from "semantic-ui-react";

interface IProps {
    text?: string;
    disabled?: boolean;
    form: string;
}

const SubmitButton: React.FC<IProps> = ({ text, form, disabled = false }) => {
    return (
        <Button type="submit" disabled={disabled} form={form} color="green">
            <Icon name="checkmark" /> {!!text ? text : "Lisa"}
        </Button>
    );
};

export default SubmitButton;
