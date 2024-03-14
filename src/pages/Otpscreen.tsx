import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import Inputbox from "../components/Inputbox";
import BottomButton from "../components/BottomButton";
import Navbar from "../components/Navbar";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Form } from "antd";

const Otpscreen: React.FunctionComponent = () => {
  const [otp, setOtp] = useState("");
  return (
    <>
      <Navbar />
      <div className="main">
        <div className="forgetpassdiv">
          <Header headingtitle="Enter OTP" />
          <p className="instruction">Enter the OTP</p>
          <Form>
            <Inputbox
              label="OTP"
              classname="inputbox"
              name="otp"
              message="Enter OTP"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e: any) => setOtp(e.target.value)}
            />

            <BottomButton btntext="Submit Now" />
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

export default Otpscreen;
