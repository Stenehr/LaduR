import _ from "lodash";
import {
    RESET_NEW_VENDOR_ID,
    VENDOR_LOADING,
    ADD_VENDOR,
    VENDOR_MODAL_OPEN,
    VENDOR_MODAL_CLOSE,
    GET_VENDORS
} from "../actions/types";

const initialState = {
    list: [],
    isLoading: false,
    vendorModalOpen: false,
    newVendorId: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case VENDOR_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case VENDOR_MODAL_OPEN:
            return {
                ...state,
                vendorModalOpen: true
            };
        case VENDOR_MODAL_CLOSE:
            return {
                ...state,
                vendorModalOpen: false
            };
        case GET_VENDORS:
            return {
                ...state,
                isLoading: false,
                list: _.mapKeys(action.payload, "id")
            };
        case ADD_VENDOR:
            return {
                ...state,
                list: { ...state.list, [action.payload.id]: action.payload },
                isLoading: false,
                vendorModalOpen: false,
                newVendorId: action.payload.id
            };
        case RESET_NEW_VENDOR_ID:
            return {
                ...state,
                newVendorId: null
            }
        default:
            return state;
    }
};
