import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CrisisSignup.css";

const CrisisSignup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    fetch("/data/states.json")
      .then((res) => res.json())
      .then((data) => setStates(data));
  }, []);

  const handleStateChange = async (e) => {
    const state = e.target.value;
    setSelectedState(state);
    const res = await fetch("/data/districts.json");
    const data = await res.json();
    setDistricts(data[state] || []);
    setCities([]);
  };

  const handleDistrictChange = async (e) => {
    const district = e.target.value;
    setSelectedDistrict(district);
    setSelectedCity("");

    try {
      const res = await fetch("/data/cities.json");
      const data = await res.json();
      setCities(data[selectedState]?.[district] || []);
    } catch (err) {
      console.error("Error loading cities:", err);
      setCities([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
  };

  // Get today's date for dob max
  const maxDOB = new Date().toISOString().split("T")[0];

  return (
    <div className="signup-bg">
      <div className="signup-left">
        <h1 className="crisis-logo">CrisisLink</h1>
      </div>

      <div className="signup-form-container">
        <div className="form-box">
          <h2 className="welcome-title d-flex justify-content-center align-items-center">Welcome</h2>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="mb-3 col-md-6">
                <label className="form-label label-light" htmlFor="fname">First Name</label>
                <input type="text" id="fname" className="form-control input-light" placeholder="Enter your first name" required />
              </div>
              <div className="mb-3 col-md-6">
                <label className="form-label label-light" htmlFor="lname">Last Name</label>
                <input type="text" id="lname" className="form-control input-light" placeholder="Enter your last name" required />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label label-light" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="form-control input-light"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="row">
              <div className="mb-3 col-md-4">
                <label className="form-label label-light">Gender</label>
                <div>
                  <label className="me-3">
                    <input type="radio" name="gender" value="Male" required /> Male
                  </label>
                  <label className="me-3">
                    <input type="radio" name="gender" value="Female" required /> Female
                  </label>
                  <label>
                    <input type="radio" name="gender" value="Other" required /> Other
                  </label>
                </div>
              </div>

              <div className="mb-3 col-md-4">
                <label className="form-label label-light" htmlFor="dob">Date of Birth</label>
                <input
                  type="date"
                  id="dob"
                  max={maxDOB}
                  className="form-control input-light"
                  placeholder="Select DOB"
                  required
                />
              </div>

              <div className="mb-3 col-md-4">
                <label className="form-label label-light" htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  className="form-control input-light"
                  placeholder="Enter 10-digit number"
                  pattern="[0-9]{10}"
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="mb-3 col-md-4">
                <label className="form-label label-light" htmlFor="state">State</label>
                <select
                  id="state"
                  className="form-select input-light"
                  required
                  onChange={handleStateChange}
                >
                  <option value="">Select State</option>
                  {states.map((state) => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>

              <div className="mb-3 col-md-4">
                <label className="form-label label-light" htmlFor="district">District</label>
                <select
                  id="district"
                  className="form-select input-light"
                  required
                  value={selectedDistrict}
                  onChange={handleDistrictChange}
                >
                  <option value="">Select District</option>
                  {districts.map((dist) => (
                    <option key={dist} value={dist}>{dist}</option>
                  ))}
                </select>
              </div>

              <div className="mb-3 col-md-4">
                <label className="form-label label-light" htmlFor="city">City</label>
                <select
                  id="city"
                  className="form-select input-light"
                  required
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                >
                  <option value="">Select City</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-3 position-relative">
              <label className="form-label label-light" htmlFor="password">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="form-control input-light"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>

            <div className="mb-3 position-relative">
              <label className="form-label label-light" htmlFor="confirmPassword">Confirm Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                className="form-control input-light"
                placeholder="Confirm your password"
                required
              />
              <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>

            <button type="submit" className="btn btn-primary w-100">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CrisisSignup;
