import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Login.scss";
import { showFailureToaster } from "../../utils/toaster";
import { login, userLoginSchema } from "../../services/authService";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
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

    const { error } = userLoginSchema.validate(user);
    if (error) return showFailureToaster(error.message);

    try {
      await login({ ...user });
      // setUser({ name: "", email: "", password: "", userType: "" });
    } catch (error) {}

    navigate("/");
  };

  return (
    <div className="login">
      <form className="loginForm" onSubmit={handleSubmit}>
        <h1>Sign in</h1>

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
        <button className="loginButton" type="submit">
          Login
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link to="/register" className="link">
          Register
        </Link>
      </button>
    </div>
  );
}

export default Login;
