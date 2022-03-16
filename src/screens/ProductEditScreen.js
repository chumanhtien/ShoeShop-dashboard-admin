import React from "react";
import Sidebar from "./../components/sidebar";
import Header from "./../components/Header";
import EditProductMain from "../components/products/EditProductMain";
// import products from "./../data/Products";
// import { useParams } from "react-router-dom";

const ProductEditScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <EditProductMain />
      </main>
    </>
  );
};
export default ProductEditScreen;
