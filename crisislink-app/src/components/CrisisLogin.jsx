import React, { useState } from "react";
import { motion } from "framer-motion";
import "./CrisisLogin.css";
import { Link } from "react-router-dom";
import kerLogo from "../assets/bg.png";

const CrisisLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Login successful");
        // Redirect or update app state as needed
      } else {
        alert(data.error || "Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="login-container">
      <div className="left-panel">
        <img src={kerLogo} alt="Background" className="background-img" />
        <div className="overlay">
          <div className="logo-circle"></div>
          <motion.div whileHover={{ y: -3 }}>
            <h1 className="logo-text">CrisisLink</h1>
          </motion.div>
        </div>

        <div className="form-container">
          <h2>Welcome<br />Back</h2>
          <form onSubmit={handleLogin}>
            <label htmlFor="email">Email</label>
            <motion.div whileHover={{ scale: 1.09 }}>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </motion.div>

            <label htmlFor="password">Password</label>
            <div className="password-wrapper">
              <motion.div whileHover={{ scale: 1.09 }}>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="toggle-visibility"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "🙈" : "👁️"}
                </span>
              </motion.div>
            </div>

            <div className="options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <p>Do not have an account? <Link to="/signin">Sign up</Link></p>
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
    </div>
  );
};

export default CrisisLogin;
