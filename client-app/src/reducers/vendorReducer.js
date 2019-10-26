import { VENDOR_LOADING, ADD_VENDOR } from "../actions/types";

const initialState = {
    list: [],
    isLoading: false
}

export default (state = initialState, action) => {

    switch (action.type) {
        case VENDOR_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case ADD_VENDOR:
            return {
                ...state,
                [action.payload.id]: action.payload,
                isLoading: false
            }
        default:
            return state;
    }

}