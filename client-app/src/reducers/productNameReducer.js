import _ from "lodash";
import { GET_PRODUCT_NAMES, EDIT_PRODUCT_NAME, PRODUCT_NAME_LOADING, DELETE_PRODUCT_NAME } from "../actions/types";

const initialState = {
    list: {},
    isLoading: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_NAME_LOADING:
            return { ...state, isLoading: true };
        case GET_PRODUCT_NAMES:
            return {
                ...state,
                list: _.mapKeys(action.payload, "id"),
                isLoading: false
            };
        case EDIT_PRODUCT_NAME:
            return {
                ...state,
                list: { ...state.list, [action.payload.id]: action.payload.productName },
                isLoading: false
            };
        case DELETE_PRODUCT_NAME:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state;
    }
};
