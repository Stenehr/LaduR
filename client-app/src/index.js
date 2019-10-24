import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "semantic-ui-css/semantic.min.css";

import App from "./App";
import reducers from "./reducers";
import * as serviceWorker from "./serviceWorker";

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnchancers(applyMiddleware(reduxThunk))
);

toast.configure();
const root = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    root
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
