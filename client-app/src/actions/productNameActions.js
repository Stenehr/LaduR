import { 
    CHANGE_PRODUCT_NAME,
    GET_PRODUCT_NAMES
} from "./types";

export const getProductNames = () => async (dispatch) => {

    // TODO: MAKE API CALL

    dispatch({
        type: GET_PRODUCT_NAMES,
        payload: [{id: 1, name: "haamer"}, {id: 2, name: "nael"}]
    })

};

export const changeProductName = (formValues) => async (dispatch) => {

    // TODO: MAKE API CALL

    console.log(formValues);
    dispatch({
        type: CHANGE_PRODUCT_NAME,
        payload: {
            changeSuccessful: true
        }
    })
};