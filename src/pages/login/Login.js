import React from "react";
import logo from "../../assets/images/logo.svg";
import logoText from "../../assets/images/logoText.svg";
function Login() {
  return (
    <div className="login">
      <div className="logo">
        <img src={logo} alt="logo" />
        <img src={logoText} alt="logo" />
      </div>
      <label className="email">Email Address</label>
      <input className="nameText" type="text" />
      <label className="password">Password</label>
      <input className="nameText" type="text" />
      <div className="remember">
        <div className="checkPassword">
          <span>Remember me</span>
        </div>
        <p>Forgot Password?</p>
      </div>
      <div className="loginBtn">
        <button>Login</button>
        <p>Sign up?</p>
      </div>
    </div>
  );
}

export default Login;
