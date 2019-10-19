import _ from "lodash";
import {
    GET_PRODUCT_NAMES,
    CHANGE_PRODUCT_NAME
} from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
        case GET_PRODUCT_NAMES:
            return { ...state, ..._.mapKeys(action.payload, "id") }
        case CHANGE_PRODUCT_NAME:
            return { ...state, [action.payload.id]: action.payload }
        default:
            return state;
    }
};
