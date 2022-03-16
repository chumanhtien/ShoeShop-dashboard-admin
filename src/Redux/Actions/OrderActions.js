import { ORDER_GETALL_FAIL, ORDER_GETALL_REQUEST, ORDER_GETALL_SUCCESS } from "../Constants/OrderConstants";
import { logout } from "./UserActions";
import axios from "axios";

// GET ALL ORDERS BY ADMIN
export const getALLOrders = () => async(dispatch, getState) => {
    try {
        dispatch({type: ORDER_GETALL_REQUEST});
        const {
            userLogin: {userInfo},
        } = getState();
        
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }
        const {data} = await axios.get(
            `/api/orders/admin/all`, 
            config
        );

        dispatch({type: ORDER_GETALL_SUCCESS, payload: data});

    } catch (error) {
        const message = error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout());
        }
        dispatch({
            type: ORDER_GETALL_FAIL,
            payload: message
        });
    }
};