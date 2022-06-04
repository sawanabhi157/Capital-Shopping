import React, { useState } from "react";
import "./SignupScreen.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { SERVER_URL } from "../../utils";
function SignupScreen() {
  const [userRegistration, setuserRegistration] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [cfPassword, setCFPassword] = useState("");

  const [records, setRecords] = useState([]);

  const HandleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setuserRegistration({ ...userRegistration, [name]: value });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(userRegistration);
    axios
      .post(`${SERVER_URL}/users`, {
        ...userRegistration,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    setuserRegistration({
      username: "",
      email: "",
      password: "",
    });
    setCFPassword("");
  };

  return (
    <div className="main-signup-screen">
      <div className="child-signup-screen">
        <div className="inner-child-signup">
          <div className="child-signup-top">
            <h2 className="h2-signup">Capital Shopping</h2>
            <h3 className="h3-signup">Sign Up</h3>
            <p className="p-signup">Create your account to get full access</p>
          </div>

          <div className="child-signup-middle">
            <form action="" onSubmit={HandleSubmit}>
              <div>
                <label>Enter Name</label>
                <input
                  type="text"
                  autoComplete="off"
                  name="username"
                  onChange={HandleOnChange}
                  value={userRegistration.username}
                  id="username"
                />
              </div>
              <div>
                <label>Enter Email</label>
                <input
                  type="text"
                  autoComplete="off"
                  onChange={HandleOnChange}
                  value={userRegistration.email}
                  name="email"
                  id="email"
                />
              </div>
              <div>
                <label>Enter Password</label>
                <input
                  type="password"
                  autoComplete="off"
                  onChange={HandleOnChange}
                  value={userRegistration.password}
                  name="password"
                  id="password"
                />
              </div>
              <div>
                <label>Confirm Password</label>
                <input
                  type="password"
                  autoComplete="off"
                  onChange={(e) => setCFPassword(e.target.value)}
                  value={cfPassword}
                  name="cfPassword"
                  id="cfPassword"
                />
              </div>
              <div className="child-signup-bottom">
                <button className="signup-button" type="submit">
                  Sign Up
                </button>
                <p className="p-signup">
                  You have an account?
                  <Link to="/login" className="login-link">
                    Login
                  </Link>
                  here
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupScreen;
