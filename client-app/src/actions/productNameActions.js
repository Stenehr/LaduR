import { 
    EDIT_PRODUCT_NAME,
    GET_PRODUCT_NAMES,
    PRODUCT_NAME_LOADING,
    DELETE_PRODUCT_NAME
} from "./types";

import api from "../api";
import { toast } from "react-toastify";

export const getProductNames = () => async (dispatch) => {
    dispatch({
        type: PRODUCT_NAME_LOADING
    });

    const productNames = await api.productName.list();

    dispatch({
        type: GET_PRODUCT_NAMES,
        payload: productNames
    })
};

export const editProductName = (id, name) => async (dispatch) => {

    dispatch({
        type: PRODUCT_NAME_LOADING
    });

    const changedData = await api.productName.update(id, { name });
    
    dispatch({
        type: EDIT_PRODUCT_NAME,
        payload: {
            id,
            productName: changedData
        }
    })

    toast.success("Nimi muudetud!");
};

export const deleteProductName = (id) => async (dispatch) => {
    dispatch({
        type: PRODUCT_NAME_LOADING
    });

    await api.productName.delete(id);

    dispatch({
        type: DELETE_PRODUCT_NAME
    });

    toast.info("Toote nimi kustutatud");
}
