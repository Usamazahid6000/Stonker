import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Loginpage = () => {
  const Navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "", 
  });

  const loginData = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const userCredential = useSelector((state) => state);

  // console.log(userCredential, "userCredential");

  const handleLogin = () => {
    if (
      userCredential.Email === values.email &&
      userCredential.password === values.password
    ) {
      Navigate("/dashboard");
    } else {
      alert("wrong user");
    }
  };

  return (
    <>
      <div className="content">
        <div className="Wrapper">
          <div className="header">
            <div className="logo"></div>
          </div>
          <div className="form-main">
            <div className="heading">
              <h3>Sign in to your account</h3>
            </div>
            <div className="email" id="email">
              <label htmlFor="Email">
                <span>Email address</span>
              </label>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={loginData}
              />
            </div>

            <div className="password" id="password">
              <label htmlFor="password">
                <span>Password</span>
              </label>
              <input
                type="password"
                name="password"
                value={values.password}
                onChange={loginData}
              />
            </div>
            <div className="check">
              <div>
                <input type="checkbox" name="remember" />
                <label htmlFor="checkbox">
                  <span style={{ paddingLeft: "10px" }}>Remember me</span>
                </label>
              </div>

              <div className="forget-password">
                <h6>Forget Password</h6>
              </div>
            </div>
            <button className="btn" onClick={handleLogin}>
              Sign In
            </button>
            <div className="sign-up">
              <p>New to Stonkered?</p>
              <span className="text-color">
                <Link to="/signup">
                  <p>Create an account</p>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loginpage;
