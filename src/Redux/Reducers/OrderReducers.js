import { ORDER_DETAILS_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_GETALL_FAIL, ORDER_GETALL_REQUEST, ORDER_GETALL_SUCCESS } from "../Constants/OrderConstants"

//GET ALL ORDERS BY ADMIN
export const orderGetAllReducer = (state = {orders: []}, action) => {
    switch (action.type) {
        case ORDER_GETALL_REQUEST:
            return {loading: true};
        case ORDER_GETALL_SUCCESS:
            return {loading: false, orders: action.payload};
        case ORDER_GETALL_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

//GET AN ORDER BY ID
export const orderDetailsReducer = (
    state = {loading: true, orderItems: [], shippingAddress: {}}, 
    action
) => {
    switch (action.type) {
        case ORDER_DETAILS_REQUEST:
            return {...state, loading: true};
        case ORDER_DETAILS_SUCCESS:
            return {loading: false, order: action.payload};
        case ORDER_DETAILS_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}