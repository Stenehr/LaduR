import { 
    EDIT_PRODUCT_NAME,
    GET_PRODUCT_NAMES
} from "./types";

export const getProductNames = () => async (dispatch) => {

    // TODO: MAKE API CALL
    dispatch({
        type: GET_PRODUCT_NAMES,
        payload: [{id: 1, name: "haamer"}, {id: 2, name: "nael"}]
    })

};

export const editProductName = (id, name) => async (dispatch) => {

    // TODO: MAKE API CALL
    dispatch({
        type: EDIT_PRODUCT_NAME,
        payload: {
            editSuccessful: true,
            id,
            productName: { id, name }
        }
    })
};