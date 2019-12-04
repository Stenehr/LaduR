import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/common/NavBar';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import HomePage from './components/common/HomePage';
import AddOrderIn from './components/order-in/AddOrderIn';
import AddVendor from './components/vendor/AddVendor';

const App: React.FC = () => {
  return (
    <Fragment>
      <NavBar/>
      <Container>
        <Route path="/" exact component={HomePage} />
        <Route path="/add-order-in" exact component={AddOrderIn} />
        <Route path="/add-vendor" exact component={AddVendor} />
      </Container>
    </Fragment>
  );
}

export default App;
