import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { userListUsersReducer, userLoginReducer } from "./Reducers/UserReducers";
import { productCreateReducer, productDeleteReducer, productEditReducer, productListReducer, productUpdateReducer } from "./Reducers/ProductReducers";
import { orderDeliveredReducer, orderDetailsReducer, orderGetAllReducer } from "./Reducers/OrderReducers";


const reducer = combineReducers({
    userLogin: userLoginReducer,
    userListUsers: userListUsersReducer,

    productList: productListReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    productEdit: productEditReducer,
    productUpdate: productUpdateReducer,

    orderGetAll: orderGetAllReducer,
    orderDetails: orderDetailsReducer,
    orderDelivery: orderDeliveredReducer,
});


//login
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
? JSON.parse(localStorage.getItem("userInfo"))
: null;

const initialState = {
    userLogin: {userInfo: userInfoFromLocalStorage},
};

const middleware = [thunk];

const store = createStore(
    reducer, 
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;