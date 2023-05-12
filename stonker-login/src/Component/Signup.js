import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { RegestierHandler } from "../Redux/Action";

const Signup = () => {
  const dispatch = useDispatch();

  const [FirstNameerror, SetFirstNameerror] = useState("");
  const [lastnameerror, Setlastnameerror] = useState("");
  const [Usernameerror, SetUsername] = useState("");
  const [emailerror, Setemailerror] = useState("");
  const [passworderror, Setpassworderror] = useState("");

  const [values, setValues] = useState({
    FirstName: "",
    lastname: "",
    Username: "",
    Email: "",
    password: "",
    checked: false,
  });

  const sumbitHandler = (e) => {
    e.preventDefault();
  };

  const userData = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const signupHandler = () => {
    if (values.FirstName === "") {
      SetFirstNameerror("This felid is required");
    }
    if (values.lastname === "") {
      Setlastnameerror("This felid is required");
    }
    if (values.Username === "") {
      SetUsername("This felid is required");
    }
    if (values.Email === "") {
      Setemailerror("this felid is required");
    }
    if (values.password === "") {
      Setpassworderror("this felid is required");
    } else if (values.checked === false) {
      alert("accept our conditions ");
    }

    const obj = {
      FirstName: values.FirstName,
      lastname: values.lastname,
      Username: values.Username,
      Email: values.Email,
      password: values.password,
    };

    RegestierHandler(obj)(dispatch);

    // dispatch(RegestierHandler(obj))

    // Empty the input felid after the user Data is submitted
    setValues({
      FirstName: "",
      lastname: "",
      Username: "",
      Email: "",
      password: "",
      checked: "",
    });
  };

  const handleCheckbox = () => {
    setValues({ ...values, checked: !values.checked });
  };

  return (
    <>
      <form onSubmit={sumbitHandler}>
        <div className="content signupT">
          <div className="Wrapper">
            <div className="header">
              <div className="logo"></div>
            </div>
            <div className="form-main">
              <div className="heading">
                <h3>Create your account</h3>
              </div>
              <div className="FirstName" id="email">
                <label htmlFor="FirstName">
                  <span>First Name</span>
                </label>
                <input
                  type="FirstName"
                  name="FirstName"
                  value={values.FirstName}
                  onChange={userData}
                />
              </div>
              <p className="error-color">{FirstNameerror}</p>

              <div className="lastname" id="email">
                <label htmlFor="lastname">
                  <span>Last Name</span>
                </label>
                <input
                  type="lastname"
                  name="lastname"
                  value={values.lastname}
                  onChange={userData}
                />
              </div>
              <p className="error-color">{lastnameerror}</p>
              <div className="Username" id="email">
                <label htmlFor="Username">
                  <span>Username</span>
                </label>
                <input
                  type="Username"
                  name="Username"
                  value={values.Username}
                  onChange={userData}
                />
              </div>
              <p className="error-color">{Usernameerror}</p>
              <div className="email" id="email">
                <label htmlFor="Email">
                  <span>Email address</span>
                </label>
                <input
                  type="email"
                  name="Email"
                  value={values.Email}
                  onChange={userData}
                />
              </div>
              <p className="error-color">{emailerror}</p>

              <div className="password" id="password">
                <label htmlFor="password">
                  <span>Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={userData}
                />
              </div>
              <p className="error-color">{passworderror}</p>
              <div className="check">
                <div>
                  <input type="checkbox" name="remember" />
                  <label htmlFor="checkbox">
                    <span style={{ paddingLeft: "10px" }}>Remember me</span>
                  </label>
                </div>
                <div className="forget-password">
                  <input
                    type="checkbox"
                    name="termsconditions"
                    value={values.checked}
                    onChange={handleCheckbox}
                  />
                  <label htmlFor="checkbox">
                    <span style={{ paddingLeft: "10px" }}>
                      Accept terms & conditions
                    </span>
                  </label>
                </div>
              </div>
              <button className="btn" onClick={signupHandler}>
                Sign up
              </button>
              <div className="sign-up">
                <p>Have a Stonkered account?</p>
                <span className="text-color">
                  <Link to="/">
                    <p>Sign in</p>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Signup;
