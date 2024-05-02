import React from "react";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import {
  setLoginEmail,
  setLoginPassword,
} from "../../redux/action/loginAction";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/action/authAction";
import { useDispatch, useSelector } from "react-redux";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useSelector((state) => state?.login?.email);
  const password = useSelector((state) => state?.login?.password);

  const handleAuthentication = (e) => {
    e.preventDefault();
    dispatch(login(email, password, navigate));
  };

  return (
    <div className="login-page-main-container">
      <div className="login-card">
        <h2 className="login-heading">Login</h2>
        <form onSubmit={handleAuthentication}>
          <InputField
            name="email"
            type="email"
            placeholder="Email"
            className="login-email"
            onChange={(e) => dispatch(setLoginEmail(e))}
            required
          />
          <InputField
            name="password"
            type="password"
            placeholder="Password"
            className="login-password"
            onChange={(e) => dispatch(setLoginPassword(e))}
            required
          />
          <Button name="Login" className="login-button" />
        </form>
      </div>
    </div>
  );
};

export default Login;
