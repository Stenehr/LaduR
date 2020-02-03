import React from "react";
import { Menu, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <Menu inverted>
            <Container>
                <Menu.Item header name="Ladur" as={Link} to="/" />
                <Menu.Item name="Lisa sisseost" as={Link} to="/add-order-in" />
                <Menu.Item name="Sisseostud" as={Link} to="/orders-in" />
            </Container>
        </Menu>
    );
};

export default NavBar;
