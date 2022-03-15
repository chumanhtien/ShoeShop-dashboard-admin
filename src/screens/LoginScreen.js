import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Message from "../components/LoadingError/Error";
import { login } from "../Redux/Actions/UserActions";
import Loading from "../components/LoadingError/Loading";
import Toast from "../components/LoadingError/Toast";
const Login = () => {
  window.scrollTo(0, 0);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();
  // console.log(location);
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userLogin = useSelector((state) => state.userLogin);
  // console.log(userLogin)
  const {error, loading, userInfo} = userLogin;

  const navigate = useNavigate();
  useEffect(() => {
    if(userInfo) {
      navigate(redirect);
    }
  }, [userInfo, navigate, redirect]);
  
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  }

  
  return (
    <>
    <Toast/>
      <div
        className="card shadow mx-auto"
        style={{ maxWidth: "380px", marginTop: "100px" }}
      >
        <div className="card-body">
          {error && <Message variant={"alert-danger"}>{error}</Message>}
          {loading && <Loading/>}
          <h4 className="card-title mb-4 text-center">Sign in</h4>
          <form onSubmit={submitHandler}>
            <div className="mb-3">
              <input
                className="form-control"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
