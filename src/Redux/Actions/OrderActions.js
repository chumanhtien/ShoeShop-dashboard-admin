import { ORDER_DELIVERED_REQUEST, ORDER_DELIVERED_SUCCESS, ORDER_DETAILS_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_GETALL_FAIL, ORDER_GETALL_REQUEST, ORDER_GETALL_SUCCESS } from "../Constants/OrderConstants";
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

//GET SINGLE ORDER DETAILS
export const getSingleOrderDetails = (id) => async(dispatch, getState) => {
    try {
        dispatch({type: ORDER_DETAILS_REQUEST});
        const {
            userLogin: {userInfo},
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }
        
        const {data} = await axios.get(
            `/api/orders/${id}`, 
            config
        );
        dispatch({type: ORDER_DETAILS_SUCCESS, payload: data});


        //DKI thanh cong => Dang nhap luon
        // dispatch({type: USER_LOGIN_SUCCESS, payload: data});
    } catch (error) {
        const message = error.response && error.response.data.message ? error.response.data.message : error.message;
        if (message === "Not authorized, no token") {
            dispatch(logout())
        } 
        dispatch({
            type: ORDER_DETAILS_FAIL,
            payload: message
        });
    }
};

//GET SINGLE ORDER DELIVERED
export const makeOrderDelivered = (order) => async(dispatch, getState) => {
    try {
        dispatch({type: ORDER_DELIVERED_REQUEST});
        const {
            userLogin: {userInfo},
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }
        
        const {data} = await axios.put(
            `/api/orders/${order._id}/delivered`, 
            {},
            config
        );
        dispatch({type: ORDER_DELIVERED_SUCCESS, payload: data});


        //DKI thanh cong => Dang nhap luon
        // dispatch({type: USER_LOGIN_SUCCESS, payload: data});
    } catch (error) {
        const message = error.response && error.response.data.message ? error.response.data.message : error.message;
        if (message === "Not authorized, no token") {
            dispatch(logout())
        } 
        dispatch({
            type: ORDER_DETAILS_FAIL,
            payload: message
        });
    }
};