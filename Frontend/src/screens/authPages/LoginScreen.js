import React from "react";
import "./LoginScreen.css";
import { Link } from "react-router-dom";
function LoginScreen() {
  return (
    <div className="main-login-screen">
      <div className="child-login-screen">
        <div className="inner-child-login">
          <div className="child-login-top">
            <h2 className="h2-login">Capital Shopping</h2>
            <h3 className="h3-login">Login</h3>
            <p className="p-login">Enter Login Details to get access</p>
          </div>

          <div className="child-login-middle">
            <form action="">
              <div>
                <label htmlFor="email">Enter Email</label>
                <input type="text" name="email" id="email" autoComplete="off" />
              </div>
              <div>
                <label>Enter Password</label>
                <input
                  type="password"
                  name="username"
                  id="username"
                  autoComplete="new-password"
                />
              </div>
            </form>
          </div>

          <div className="child-login-bottom">
            <button className="login-button">Login</button>
            <p>
              Don't have an account?
              <Link to="/signup" className="signup-link">
                Signup
              </Link>
              here
            </p>
            <button className="G-login-button">Continue with Google</button>
            <button className="F-login-button">Continue with Facebook</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
