import React from "react";
import { Button, Icon } from "semantic-ui-react";

interface IProps {
    text?: string;
    form: string;
}

export const SubmitButton: React.FC<IProps> = ({ text, form }) => {
    return (
        <Button type="submit" form={form} color="green">
            <Icon name="checkmark" /> {!!text ? text : "Lisa"}
        </Button>
    );
};
