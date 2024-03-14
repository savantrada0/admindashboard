import React, { useState } from "react";
import Inputbox from "./Inputbox";
import BottomButton from "./BottomButton";
import { NavLink, useNavigate, Navigate } from "react-router-dom";
import TopButton from "./TopButton";
import { Form, Input } from "antd";
import { useAppDispatch, useAppSelector } from "../features/store.hooks";
import { loginUser } from "../features/slices/userSlice";

type topbtnProps = {
  isSignup: boolean;
  handleSignIn: () => void;
  handleSignUp: () => void;
};

const initialsignindata = {
  email: "",
  password: "",
};

const Login = ({ handleSignIn, isSignup, handleSignUp }: topbtnProps) => {
  const user = useAppSelector((state) => state.user);
  const [signindata, setSignindata] = useState(initialsignindata);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignindata({ ...signindata, [name]: value });
  };

  const onFinish = () => {
    const data = {
      username: signindata?.email,
      password: signindata?.password,
    };
    dispatch(loginUser(data));
    {
      !user.loading && user.user && navigate("/home");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  if (user.user.token) {
    return <Navigate replace to="/home" />;
  }

  return (
    <div className="loginbox">
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error ? <div>Error:{user.error}</div> : null}
      <TopButton
        handleSignIn={handleSignIn}
        handleSignUp={handleSignUp}
        isSignup={isSignup}
      />
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Inputbox
          label="Email"
          classname="inputbox"
          name="email"
          message="Enter Email"
          placeholder="Enter Email"
          value={signindata.email}
          onChange={handleChange}
        />
        <Form.Item
          className="inputbox"
          label={<label style={{ color: "#747C89" }}>Password</label>}
          rules={[{ required: true, message: "Enter Password" }]}
        >
          <Input.Password
            name="password"
            placeholder="Enter Password"
            onChange={handleChange}
            value={signindata.password}
          ></Input.Password>
        </Form.Item>

        <NavLink className="forgetlink" to="/fogetpass">
          Forget Password?
        </NavLink>

        <BottomButton btntext="Sign In" />
      </Form>
    </div>
  );
};

export default Login;
