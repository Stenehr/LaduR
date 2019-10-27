import {
    RESET_NEW_VENDOR_ID,
    ADD_VENDOR,
    VENDOR_LOADING,
    VENDOR_MODAL_OPEN,
    VENDOR_MODAL_CLOSE,
    GET_VENDORS
} from "./types";
import api from "../api";
import { toast } from "react-toastify";

export const getVendors = () => async dispatch => {
    dispatch({
        type: VENDOR_LOADING
    });

    var vendors = await api.vendor.list();

    dispatch({
        type: GET_VENDORS,
        payload: vendors
    });
};

export const resetNewVendorId = () => {
    return {
        type: RESET_NEW_VENDOR_ID
    };
};

export const addVendor = vendorData => async dispatch => {
    dispatch({
        type: VENDOR_LOADING
    });

    var vendor = await api.vendor.add(vendorData);

    dispatch({
        type: ADD_VENDOR,
        payload: vendor
    });

    toast.success("Ostukoht lisatud");
};

export const openVendorModal = () => {
    return {
        type: VENDOR_MODAL_OPEN
    };
};

export const closeVendorModal = () => {
    return {
        type: VENDOR_MODAL_CLOSE
    };
};
