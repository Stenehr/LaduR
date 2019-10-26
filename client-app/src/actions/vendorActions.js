import { ADD_VENDOR, VENDOR_LOADING } from "./types";
import api from "../api";
import { toast } from "react-toastify";

export const addVendor = (vendorData) => async (dispatch) => {

    dispatch({
        type: VENDOR_LOADING
    });

    var vendor = await api.vendor.add(vendorData);

    dispatch({
        type: ADD_VENDOR,
        payload: vendor
    });

    toast.success("Ostukoht lisatud");
}