import React from "react";
import { Container } from "semantic-ui-react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

export default props => (
    <div>
        <BrowserRouter>
            <Navbar />
            <Container style={{ marginTop: "3em" }}>{props.children}</Container>
        </BrowserRouter>
    </div>
);
