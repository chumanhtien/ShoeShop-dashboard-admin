import React, { useEffect } from "react";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/productScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import OrderScreen from "./screens/OrderScreen";
import OrderDetailScreen from "./screens/OrderDetailScreen";
import AddProduct from "./screens/AddProduct";
import Login from "./screens/LoginScreen";
import UsersScreen from "./screens/UsersScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import NotFound from "./screens/NotFound";
import PrivateRouter  from "./PrivateRouter";
import { useDispatch, useSelector } from "react-redux";
import { getListProducts } from "./Redux/Actions/ProductActions";
import { getALLOrders } from "./Redux/Actions/OrderActions";
function App() {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const {userInfo} = userLogin;

  useEffect(() => {
    if(userInfo && userInfo.isAdmin) {
      dispatch(getListProducts());
      dispatch(getALLOrders());
    }
  }, [dispatch, userInfo])
  return (
    <>
      <Router>
        <Routes>
          <Route element={<PrivateRouter/>}>
            <Route path="/" element={<HomeScreen/>} exact />
            <Route path="/products" element={<ProductScreen/>} />
            <Route path="/category" element={<CategoriesScreen/>} />
            <Route path="/orders" element={<OrderScreen/>} />
            <Route path="/order/:id" element={<OrderDetailScreen/>} />
            <Route path="/addproduct" element={<AddProduct/>} />
            <Route path="/users" element={<UsersScreen/>} />
            <Route path="/product/:id/edit" element={<ProductEditScreen/>} />
          </Route>
          <Route path="/login" element={<Login/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
