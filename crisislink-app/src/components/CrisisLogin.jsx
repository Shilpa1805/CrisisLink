import React, { useState } from "react";
import "./CrisisLogin.css";
import { Link } from "react-router-dom";
import kerLogo from "../assets/bg.png";

const CrisisLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
      {/* Left Panel */}
      <div className="left-panel">
        <img src={kerLogo} alt="Background" className="background-img" />
        <div className="overlay">
          <div className="logo-circle"></div>
          <h1 className="logo-text">CrisisLink</h1>
          </div>
           <div className="form-container">
          <h2>
            Welcome<br />Back
          </h2>

          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Enter your email" />

            <label htmlFor="password">Password</label>
            <div className="password-wrapper">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
              />
              <span
                className="toggle-visibility"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>

            <div className="options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <p>Do not have an account? <Link to= "/signin">Sign up</Link></p>
              
              <a href="#">Forgot Password</a>
            </div>

            <button type="submit" className="signin-button">Log in</button>
            <div className="or-divider">Or</div>

            <button className="google-button">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
                alt="Google"
              />
              Sign in with Google
            </button>
          </form>
        </div>
        

       
      
      
      </div>

      {/* Right Panel */}
      
    </div>
  );
};

export default CrisisLogin;
