"use client";
import React from "react";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import Header from "../../components/header";
import {
  setLoginEmail,
  setLoginPassword,
} from "../../redux/action/loginAction";
import { useDispatch, useSelector } from "react-redux";
import "./Login.css";

const Login = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state?.login?.email);
  const password = useSelector((state) => state?.login?.password);

  console.log(email, "email", "/////", password, "password")
  return (
    <>
      <Header />
      <div className="login-page-main-container">
        <div className="login-card">
          <h2 className="login-heading">Login</h2>
          <form>
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
    </>
  );
};

export default Login;
