import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Inputbox from "../components/Inputbox";
import BottomButton from "../components/BottomButton";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Form } from "antd";

const Fogetpass: React.FunctionComponent = () => {
  const [email, setEmail] = useState("");
  return (
    <>
      <Navbar />
      <div className="main">
        <div className="forgetpassdiv">
          <Header headingtitle="Forget Password?" />
          <p className="instruction">
            No worries, we&apos;ll send you reset instructions.
          </p>
          <Form>
            <Inputbox
              label="Email"
              classname="inputbox"
              name="email"
              message="Enter your email"
              placeholder="Enter your email"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
            />

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

export default Fogetpass;
