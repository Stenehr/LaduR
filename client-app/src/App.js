import React from "react";
import { Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Settings from "./components/Settings";
import AddOrderIn from "./components/OrderIn/AddOrderIn";
import { ToastContainer } from "react-toastify";

export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <ToastContainer />
                <Layout>
                    <Route path="/" exact component={Home} />
                    <Route path="/settings" exact component={Settings} />
                    <Route path="/add-order-in" exact component={AddOrderIn} />
                </Layout>
            </React.Fragment>
        );
    }
}
