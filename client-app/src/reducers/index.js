import { combineReducers } from "redux";
import productNameReducer from "./productNameReducer";

export default combineReducers({
    productName: productNameReducer
});
