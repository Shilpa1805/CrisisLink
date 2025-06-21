import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CrisisSignup.css";

const CrisisSignup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container-fluid vh-100 p-0">
      <div className="row g-0 h-100">
        {/* Left side with background image and logo */}
        <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center bg-image">
          <h1 className="logo-text">CrisisLink</h1>
        </div>

        {/* Right side with form */}
        <div className="col-md-6 d-flex align-items-center justify-content-center bg-form text-white">
          <div className="w-100 p-4" style={{ maxWidth: "400px" }}>
            <h2 className="mb-4">Welcome Back</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3 position-relative">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="form-control"
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
                  <label className="form-check-label" htmlFor="remember">Remember me</label>
                </div>
                <Link to="#" className="text-light small">Forgot Password</Link>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <span>Do not have an account?</span>
                <Link to="/" className="text-light">Sign up</Link>
              </div>

              <button type="submit" className="btn btn-primary w-100 mb-3">Log in</button>

              <div className="text-center mb-3">Or</div>

              <button type="button" className="btn btn-outline-light w-100 d-flex align-items-center justify-content-center">
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
    </div>
  );
};

export default CrisisSignup;
