import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Joi from "joi";

import "./Register.scss";
import { http } from "../../services/httpService";
import { baseURL } from "../../utils/config";
import { showFailureToaster, showSuccessToaster } from "../../utils/toaster";

export default function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    userType: "",
  });

  useEffect(() => {}, [user]);

  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string()
      .min(5)
      .max(255)
      .required()
      .email({ tlds: { allow: false } }),
    password: Joi.string().min(4).max(1024).required(),
    userType: Joi.string().valid("buyer", "seller").required(),
  });

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = schema.validate(user);
    if (error) return showFailureToaster(error.message);

    // const url = await upload(file);

    try {
      await http.post(baseURL + "users", { ...user });
      showSuccessToaster("Successfuly created new account!");

      setUser({
        name: "",
        email: "",
        password: "",
        userType: "",
      });

      // navigate("/")
    } catch (err) {
      showFailureToaster("Backend server is not running. Please start it.");
    }
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label htmlFor="name">Username</label>
        <input
          name="name"
          type="text"
          placeholder="Daniyal"
          className="registerInput"
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          placeholder="Enter your email address."
          className="registerInput"
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Enter your password."
          className="registerInput"
          onChange={handleChange}
        />

        <div style={{ margin: "1rem 1rem 1rem 0 " }}>
          <span style={{ marginRight: "1rem" }}>Are you Seller or Buyer?</span>
          <select value={user.userType} name="userType" onChange={handleChange}>
            <option value="">Select</option>
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>
        </div>
        <h3>Selected Role: {user.userType}</h3>

        <button className="registerButton">Register</button>
      </form>

      <button className="registerLoginButton">
        <Link to="/login" className="link">
          Login
        </Link>
      </button>
    </div>
  );
}
