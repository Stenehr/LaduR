import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import productNameReducer from "./productNameReducer";

export default combineReducers({
    form: formReducer,
    productNames: productNameReducer
});
