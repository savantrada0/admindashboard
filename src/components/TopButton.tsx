import React from "react";

type topbtnProps = {
  isSignup: boolean;
  handleSignIn: () => void;
  handleSignUp: () => void;
};

const TopButton = ({ isSignup, handleSignIn, handleSignUp }: topbtnProps) => {
  return (
    <div className="btncontain">
      <button
        className={`${isSignup ? "btnlight" : "btndark"}`}
        onClick={handleSignIn}
      >
        Sign In
      </button>
      <button
        className={`${isSignup ? "btndark" : "btnlight"}`}
        onClick={handleSignUp}
      >
        Sign Up
      </button>
    </div>
  )
};

export default TopButton;
