import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/common/NavBar';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import HomePage from './components/common/HomePage';
import AddOrderIn from './components/order-in/AddOrderIn';
import AddVendor from './components/vendor/AddVendor';
import AddProductName from './components/product-name/AddProductName';
import OrdersIn from './components/order-in/OrdersIn';
import { ToastContainer } from "react-toastify";

const App: React.FC = () => {
  return (
    <Fragment>
      <NavBar/>
      <ToastContainer position="top-right" />
      <Container>
        <Route path="/" exact component={HomePage} />
        <Route path="/orders-in" exact component={OrdersIn} />
        <Route path="/add-order-in" exact component={AddOrderIn} />
        <Route path="/add-vendor" exact component={AddVendor} />
        <Route path="/add-product-name" exact component={AddProductName} />
      </Container>
    </Fragment>
  );
}

export default App;
