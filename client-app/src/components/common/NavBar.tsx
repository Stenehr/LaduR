import React from "react";
import { Menu, Container } from "semantic-ui-react";

const NavBar = () => {
    return (
        <Menu inverted>
            <Container>
                <Menu.Item name="Lisa sisseost" />
                <Menu.Item name="messages" />
                <Menu.Item name="friends" />
            </Container>
        </Menu>
    );
};

export default NavBar;
