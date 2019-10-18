import React from "react";
import { Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Settings from "./components/Settings";

export default class App extends React.Component {
    render() {
        return (
            <Layout>
                <Route path="/" exact component={Home} />
                <Route path="/settings" exact component={Settings} />
            </Layout>
        );
    }
}
