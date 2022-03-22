import React, { useEffect } from "react";
import TopTotal from "./TopTotal";
import LatestOrder from "./LatestOrder";
import SaleStatistics from "./SalesStatistics";
import ProductsStatistics from "./ProductsStatistics";
import {useDispatch, useSelector} from "react-redux"
import { getALLOrders } from "../../Redux/Actions/OrderActions";
import { getListProducts } from "../../Redux/Actions/ProductActions";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";
const Main = () => {

  const orderGetAll = useSelector((state) => state.orderGetAll);
  const {loading, error, orders} = orderGetAll;

  const productList = useSelector((state) => state.productList);
  const {products} = productList;

  const dispatch = useDispatch();
  useEffect(() => {
    getALLOrders();
    getListProducts();
  }, [dispatch]);
  return (
    loading ? <Loading/> : error ? <Message variant={"alert-danger"}>{error}</Message> : (
      <>
        <section className="content-main">
          <div className="content-header">
            <h2 className="content-title"> Dashboard </h2>
          </div>
          {/* Top Total */}
          <TopTotal orders = {orders} products={products}/>

          <div className="row">
            {/* STATICS */}
            <SaleStatistics />
            <ProductsStatistics />
          </div>

          {/* LATEST ORDER */}
          <div className="card mb-4 shadow-sm">
            <LatestOrder orders={orders} loading = {loading} error={error}/>
          </div>
        </section>
      </>
    )
   
  );
};

export default Main;
