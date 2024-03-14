import React, { useState } from "react";
import "../assets/style.css";
import Signup from "../components/Signup";
import Login from "../components/Login";
import Navbar from "../components/Navbar";

const Auth: React.FunctionComponent = () => {
  const [isSignup, setIsSignup] = useState(false);

  const handleSignUp = () => {
    setIsSignup(true);
  };

  const handleSignIn = () => {
    setIsSignup(false);
  };
  return (
    <>
      <Navbar />
      <div className="main">
        {isSignup ? (
          <Signup
            isSignup={isSignup}
            handleSignUp={handleSignUp}
            handleSignIn={handleSignIn}
          />
        ) : (
          <Login
            isSignup={isSignup}
            handleSignUp={handleSignUp}
            handleSignIn={handleSignIn}
          />
        )}
      </div>
    </>
  );
};

export default Auth;
