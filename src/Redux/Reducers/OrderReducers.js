import { ORDER_GETALL_FAIL, ORDER_GETALL_REQUEST, ORDER_GETALL_SUCCESS } from "../Constants/OrderConstants"

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