import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import productNameReducer from "./productNameReducer";
import vendorReducer from "./vendorReducer";

export default combineReducers({
    form: formReducer,
    productNames: productNameReducer,
    vendors: vendorReducer
});
