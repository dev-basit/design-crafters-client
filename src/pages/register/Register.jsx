import { Link } from "react-router-dom";
import "./Register.scss";

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input type="text" placeholder="Enter your username." className="registerInput" />
        <label>Email</label>
        <input type="text" placeholder="Enter your email address." className="registerInput" />
        <label>Password</label>
        <input type="password" placeholder="Enter your password." className="registerInput" />
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
