import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CrisisSignup.css";

const CrisisSignup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="signup-bg">
      {/* Left side logo */}
      <div className="signup-left">
        <h1 className="crisis-logo">
          CrisisLink
        </h1>
      </div>

      {/* Right side form */}
      <div className="signup-form-container">
        <div className="form-box">
          <h2 className="welcome-title d-flex justify-content-center align-items-center">Welcome</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label label-light">Email</label>
              <input
                id="email"
                type="email"
                className="form-control input-light"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3 position-relative">
              <label htmlFor="password" className="form-label label-light">Password</label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="form-control input-light"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>

            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="remember" />
                <label className="form-check-label label-light" htmlFor="remember">Remember me</label>
              </div>
              <Link to="#" className="text-link small">Forgot<br />Password</Link>
            </div>

            <div className="d-flex justify-content-between mb-3">
              <span className="label-light">Do not have an account?</span>
              <Link to="/" className="text-link">Sign up</Link>
            </div>

            <button type="submit" className="btn btn-login w-100 mb-3">Log in</button>

            <div className="text-center mb-3 label-light">Or</div>

            <button type="button" className="btn btn-google w-100 d-flex align-items-center justify-content-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
                alt="Google"
                width="20"
                height="20"
                className="me-2"
              />
              Sign in with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CrisisSignup;
