import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ArrowLeftOutlined, KeyOutlined } from "@ant-design/icons";
import BottomButton from "../components/BottomButton";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Form, Input } from "antd";
import "../assets/style.css";

const Resetscreen: React.FunctionComponent = () => {
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  // const [showwarning, setShowwarning] = useState(false);
  const [warning, setWarning] = useState<boolean>(false);

  const ComparePass = () => {
    if (password !== "" && cpassword !== "" && password !== cpassword) {
      setWarning(true);
    } else if (password !== "" && cpassword !== "" && password === cpassword) {
      setWarning(false);
    }
  };

  // const CheckPassword = () => {
  //   if (password.length < 6) {
  //     setShowwarning(true);
  //   }
  // };

  return (
    <>
      <Navbar />
      <div className="main">
        <div className="resetpassdiv">
          <div className="keyicon">
            <KeyOutlined />
          </div>
          <Header headingtitle="Set new password" />
          <p className="instruction">
            Your new Password must be different to previously used passwords.
          </p>
          <Form>
            <Form.Item
              className="inputbox"
              name="password"
              label={<label style={{ color: "#747C89" }}>Password</label>}
              rules={[{ required: true, message: "Enter Password" }]}
            >
              <Input.Password
                placeholder="Enter Password"
                onChange={(e: any) => setPassword(e.target.value)}
                value={password}
                onKeyUp={ComparePass}
              ></Input.Password>
            </Form.Item>
            {/* {showwarning && (
            <p className="warning">Must be at least 6 characters.</p>
          )} */}
            <Form.Item
              className="inputbox"
              style={{ marginBottom: "54px" }}
              name="cpassword"
              label={
                <label style={{ color: "#747C89" }}>Confirm Password</label>
              }
              rules={[{ required: true, message: "Enter Confirm Password" }]}
            >
              <Input.Password
                placeholder="Enter Password Again"
                onChange={(e: any) => setCpassword(e.target.value)}
                value={cpassword}
                onKeyUp={ComparePass}
              ></Input.Password>
            </Form.Item>
            {warning === true && (
              <p className="cpasswarning">password does not match</p>
            )}

            <BottomButton btntext="Reset Password" />
          </Form>
          <NavLink className="gobackbtn" to="/">
            <ArrowLeftOutlined style={{ marginRight: "7px" }} />
            Back to Sign in
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Resetscreen;
