import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../Redux/Actions/ProductActions";

const Product = (props) => {
  const { product } = props;
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteProduct(id));
    }
  }
  return (
    <>
      <div className="col-md-6 col-sm-6 col-lg-4 mb-5">
        <div className="card card-product-grid shadow-sm" >
          <Link to="#" className="img-wrap" title={product.name}>
            <img src={product.image} alt="Product" />
          </Link>
          <div className="info-wrap" >
            <Link to="#" className="title text-truncate" title={product.name}>
              {product.name}
            </Link>
            <div className="price mb-2">${product.price}</div>
            <div className="row">
              <Link
                to={`/product/${product._id}/edit`}
                className="btn btn-sm btn-outline-success p-2 pb-3 col-md-6"
              >
                <i className="fas fa-pen"></i>
              </Link>
              <Link
                to="#"
                onClick={() => deleteHandler(product._id)}
                className="btn btn-sm btn-outline-danger p-2 pb-3 col-md-6"
              >
                <i className="fas fa-trash-alt"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
