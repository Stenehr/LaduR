import React from "react";
import { Container, Button, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
    state = { activeMenu: "ladur" };

    handleMenuChange = (e, { name }) => this.setState({ activeMenu: name });

    render() {
        const { activeMenu } = this.state;

        return (
            <div>
                <Menu pointing secondary size="large">
                    <Container>
                        <Menu.Item
                            as={Link}
                            to="/"
                            name="ladur"
                            active={activeMenu === "ladur"}
                            onClick={this.handleMenuChange}
                        >
                            <h2 className="ui header">Ladur</h2>
                        </Menu.Item>
                        <Menu.Item
                            as={Link}
                            to="/add-order-in"
                            style={{ marginLeft: "15px" }}
                            name="orderIn"
                            active={activeMenu === "orderIn"}
                            onClick={this.handleMenuChange}
                        >
                            Lisa sisseost
                        </Menu.Item>

                        <Menu.Menu position="right">
                            <Menu.Item
                                as={Link}
                                to="/settings"
                                name="settings"
                                active={activeMenu === "settings"}
                                onClick={this.handleMenuChange}
                            >
                                <Button primary>Sätted</Button>
                            </Menu.Item>
                        </Menu.Menu>
                    </Container>
                </Menu>
            </div>
        );
    }
}
