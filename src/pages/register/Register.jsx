import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Register.scss";
import { showFailureToaster } from "../../utils/toaster";
import { addNewUser, newUserSchema } from "../../services/userService";

export default function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    userType: "",
  });
  const navigate = useNavigate();

  useEffect(() => {}, [user]);

  //
  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = newUserSchema.validate(user);
    if (error) return showFailureToaster(error.message);

    try {
      // const url = await upload(file);
      await addNewUser({ ...user });
      // setUser({ name: "", email: "", password: "", userType: "" });
    } catch (error) {}

    navigate("/");
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" autoComplete="on" onSubmit={handleSubmit}>
        <label htmlFor="name">Username</label>
        <input
          name="name"
          type="text"
          placeholder="Daniyal"
          className="registerInput"
          onChange={handleChange}
          autoComplete="name"
        />
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          placeholder="Enter your email address."
          className="registerInput"
          onChange={handleChange}
          autoComplete="email"
        />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Enter your password."
          className="registerInput"
          onChange={handleChange}
          autoComplete="password"
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
