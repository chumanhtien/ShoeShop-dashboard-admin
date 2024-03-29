import React, { useEffect, useState } from "react";
import Toast from "../LoadingError/Toast";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editProduct, updateProduct } from "../../Redux/Actions/ProductActions";
import { PRODUCT_UPDATE_RESET } from "../../Redux/Constants/ProductConstants";
import { toast } from "react-toastify";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
}

const EditProductMain = (props) => {
  // const { productId } = props;
  const {id} = useParams()
  // console.log(productId);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const productEdit = useSelector((state) => state.productEdit);
  const {loading, error, product} = productEdit;
  // console.log(product);

  const productUpdate = useSelector((state) => state.productUpdate);
  const {loading: loadingUpdate, error: errorUpdate, success: successUpdate} = productUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({type: PRODUCT_UPDATE_RESET});
      toast.success("Product Updated Successful", ToastObjects);
    } else {
      if (!product || product._id !== id) {
        dispatch(editProduct(id));
      }
      else {
        setName(product.name);
        setDescription(product.description);
        setCountInStock(product.countInStock);
        setImage(product.image);
        setPrice(product.price);
      }
    }
  }, [dispatch, id, product, successUpdate]);

  const setImagePath = (e) => {
    const string = String(e.target.value).split("\\");
    let endpath = string[string.length - 1];
    setImage(`/images/${endpath}`);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateProduct({
      _id: id,
      name, 
      price, 
      description, 
      image, 
      countInStock
    }))
  }
  return (
    <>
    <Toast/>
      <section className="content-main" style={{ maxWidth: "1200px" }}>
        <form onSubmit={submitHandler}>
          <div className="content-header">
            <Link to="/products" className="btn btn-danger text-white">
              Go to products
            </Link>
            <h2 className="content-title">Update Product</h2>
            <div>
              <button type="submit" className="btn btn-primary">
                Publish now
              </button>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-xl-8 col-lg-8">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  {errorUpdate && <Message variant={"alert-danger"}>{errorUpdate}</Message>}
                  {loadingUpdate && <Loading/>}
                  {
                    loading ? <Loading/> : error ? <Message variant={"alert-danger"}>{error}</Message> :
                    (
                      <>
                        <div className="mb-4">
                          <label htmlFor="product_title" className="form-label">
                            Product title
                          </label>
                          <input
                            type="text"
                            placeholder="Type here"
                            className="form-control"
                            id="product_title"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="product_price" className="form-label">
                            Price ($)
                          </label>
                          <input
                            type="number"
                            placeholder="Type here"
                            className="form-control"
                            id="product_price"
                            required
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}                    />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="product_price" className="form-label">
                            Count In Stock
                          </label>
                          <input
                            type="number"
                            placeholder="Type here"
                            className="form-control"
                            id="product_price"
                            required
                            value={countInStock}
                            onChange={(e) => setCountInStock(e.target.value)}/>
                        </div>
                        <div className="mb-4">
                          <label className="form-label">Description</label>
                          <textarea
                            placeholder="Type here"
                            className="form-control"
                            rows="7"
                            required
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}></textarea>
                        </div>
                        <div className="mb-4">
                          <label className="form-label">Images</label>  
                          <div className="col-md-6 col-sm-6 col-lg-12 mb-5">
                            <div className="card card-product-grid shadow-sm">
                              <Link to="#" className="img-wrap" title={name}>
                                <img src={image} alt="Product" />
                              </Link>
                            </div>
                          </div>
                          <label className="form-label">Path</label>
                          <input
                            className="form-control"
                            type="text"
                            value={image}
                            onChange={(e) => setImage(e.target.value)} />
                          <input className="form-control mt-3" type="file" onChange={setImagePath}/>

                        </div>
                      </>
                    )
                  }
                 
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default EditProductMain;
