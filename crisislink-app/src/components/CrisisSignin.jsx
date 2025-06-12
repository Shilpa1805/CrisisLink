import React, { useState } from "react";
import "./CrisisSignin.css";
import { render } from "react-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import kerLogo from "../assets/bg.png";

const CrisisSignin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
   const [email, setEmail] = useState("");
const [emailVerified, setEmailVerified] = useState(false);
const [verifying, setVerifying] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      setError('');
     
      console.log("Form submitted successfully");
    }
  };
   const handleVerifyEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setVerifying(true);
    setTimeout(() => {
      setEmailVerified(true);
      setVerifying(false);
    }, 2000);
  };

  return (
    <div className="login-container">
      {/* Left Panel */}
      <div className="left-panel">
        <img src={kerLogo} alt="Background" className="background-img" />
        <div className="overlay">
          <div className="logo-circle"></div>
          <motion.div whileHover={{y:-3}}>
          <h1 className="logo-text">CrisisLink</h1>
          </motion.div>
        </div>

        <div className="form-container">
          <h2>Welcome</h2>

          <form onSubmit={handleSubmit}>
            <label htmlFor="name" >Name</label>
             <motion.div whileHover={{scale:1.09}}>
            <input id="name" type="text" placeholder="Enter full name" required/></motion.div>
            <label htmlFor="email">Email</label>
             <motion.div whileHover={{scale:1.09}}>
               
<input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </motion.div>
            <button
              type="button"
              className="verify-button"
              onClick={handleVerifyEmail}
              disabled={verifying || !email}
              style={{ marginBottom: '15px', marginTop: '10px' }}
            >
              {verifying
                ? "Sending..."
                : emailVerified
                ? "Email Verified ✅"
                : "Send Verification Email"}
            </button>
           
            <label htmlFor="password">Password</label>
            <div className="password-wrapper">
                <motion.div whileHover={{scale:1.09}}>
                    <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="toggle-visibility"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
                </motion.div>
              
            </div>

            <label htmlFor="confirm-password">Confirm Password</label>
            <div className="password-wrapper">
                <motion.div whileHover={{scale:1.09}}>
              <input
                id="confirm-password"
                type={showPassword ? "text" : "password"}
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <span
                className="toggle-visibility"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
              </motion.div>
            </div>

            {/* Error message */}
            {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

            <div className="options">
              <label><br />
                <input type="checkbox" /> Remember me
              </label>
              <p>Already have an account? <Link to="/">Log in</Link></p>
            </div>
           
            <button type="submit" className="signin-button">Sign Up</button>
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

export default CrisisSignin;
