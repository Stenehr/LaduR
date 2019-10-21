import { 
    EDIT_PRODUCT_NAME,
    GET_PRODUCT_NAMES,
    PRODUCT_NAME_LOADING
} from "./types";

import api from "../api";

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
            editSuccessful: true,
            id,
            productName: changedData
        }
    })
};