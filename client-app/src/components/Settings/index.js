import React from "react";
import { Grid, Menu, Segment } from "semantic-ui-react";
import ChangeProductName from "./EditProductName";

export default class Settings extends React.Component {
    state = { activeItem: "markUpCost" };

    handleActiveItem = (e, { name }) => this.setState({ activeItem: name });

    renderActiveContent = () => {
        switch (this.state.activeItem) {
            case "markUpCost":
                return <h1>markUpCost</h1>;
            case "vat":
                return <h1>VAT</h1>;
            case "hourCost":
                return <h1>horCost</h1>;
            case "editProductName":
                return <ChangeProductName />
            default:
                throw new Error("No content");
        }
    };

    render() {
        const { activeItem } = this.state;

        return (
            <Grid>
                <Grid.Column width={4}>
                    <Menu fluid vertical tabular>
                        <Menu.Item
                            name="markUpCost"
                            active={activeItem === "markUpCost"}
                            onClick={this.handleActiveItem}
                        >
                            Muuda juurdehindlus
                        </Menu.Item>
                        <Menu.Item name="vat" active={activeItem === "vat"} onClick={this.handleActiveItem}>
                            Muuda käibemaks
                        </Menu.Item>
                        <Menu.Item name="hourCost" active={activeItem === "hourCost"} onClick={this.handleActiveItem}>
                            Muuda tunnitasu
                        </Menu.Item>
                        <Menu.Item
                            name="editProductName"
                            active={activeItem === "editProductName"}
                            onClick={this.handleActiveItem}
                        >
                            Muuda tootenimi
                        </Menu.Item>
                    </Menu>
                </Grid.Column>

                <Grid.Column stretched width={12}>
                    <Segment>{this.renderActiveContent()}</Segment>
                </Grid.Column>
            </Grid>
        );
    }
}
