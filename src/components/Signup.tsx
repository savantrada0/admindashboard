import React, { useState } from "react";
import "../assets/style.css";
import BottomButton from "./BottomButton";
import Inputbox from "./Inputbox";
import { Input, Form } from "antd";
import TopButton from "../components/TopButton";
import axios from "axios";

type topbtnProps = {
  isSignup: boolean;
  handleSignIn: () => void;
  handleSignUp: () => void;
};

const initialsignupdata = {
  firstname: "",
  lastname: "",
  useremail: "",
  phone: "+91 9510815117",
  password: "",
  cpassword: "",
};

const Signup = ({ handleSignIn, isSignup, handleSignUp }: topbtnProps) => {
  const [signupdata, setSignupdata] = useState(initialsignupdata);
  const [warning, setWarning] = useState<boolean>(false);

  const comparepass = () => {
    const { password, cpassword } = signupdata;
    if (password !== "" && cpassword !== "" && password !== cpassword) {
      setWarning(true);
    } else if (password !== "" && cpassword !== "" && password === cpassword) {
      setWarning(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupdata({ ...signupdata, [name]: value });
  };

  const onFinish = () => {
    const { firstname, lastname, useremail, password, cpassword, phone } =
      signupdata;
    if (password === cpassword) {
      const newdata = {
        username: `${firstname} ${lastname}`,
        useremail,
        phone,
        password,
      };

      axios
        .post("users/add", {
          firstname: firstname,
          lastname: lastname,
          age: 250,
        })
        .then((res) => console.log(res.data));

      console.log(newdata);
    } else {
      alert("password doesn't match");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="signupbox">
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
          label="First Name"
          classname="inputbox"
          name="firstname"
          message="Enter Your FirstName"
          placeholder="Enter Your FirstName"
          value={signupdata.firstname}
          onChange={handleChange}
        />

        <Inputbox
          classname="inputbox"
          label="Last Name"
          name="lastname"
          message="Enter Your LastName"
          placeholder="Enter Your LastName"
          value={signupdata.lastname}
          onChange={handleChange}
        />

        <Inputbox
          label="Email"
          classname="inputbox"
          name="useremail"
          message="Enter Email"
          placeholder="Enter Email"
          value={signupdata.useremail}
          onChange={handleChange}
        />

        <Form.Item
          className="inputbox"
          label={<label style={{ color: "#747C89" }}>Password</label>}
          rules={[{ required: true, message: "Enter Password" }]}
        >
          <Input.Password
            placeholder="Enter Password"
            onKeyUp={comparepass}
            name="password"
            onChange={handleChange}
            value={signupdata.password}
          ></Input.Password>
        </Form.Item>

        <Form.Item
          className="inputbox"
          label={<label style={{ color: "#747C89" }}>Confirm Password</label>}
          rules={[{ required: true, message: "Enter Confirm Password" }]}
        >
          <Input.Password
            placeholder="Enter Password Again"
            onKeyUp={comparepass}
            name="cpassword"
            onChange={handleChange}
            value={signupdata.cpassword}
          ></Input.Password>
        </Form.Item>
        {warning === true && (
          <p className="cpasswarning">password does not match</p>
        )}
        <BottomButton btntext="Sign Up" />
      </Form>
    </div>
  );
};

export default Signup;
