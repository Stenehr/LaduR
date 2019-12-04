import React from "react";
import { Form, Button, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

const AddOrderIn = () => {
    return (
        <div>
            <Header as="h2">Sisseostu lisamine</Header>
            <Button as={Link} to="/add-vendor">Lisa uus ostukoht</Button>
            <Form>
                <Form.Group>
                    
                </Form.Group>
            </Form>
        </div>
    )
}

export default AddOrderIn;