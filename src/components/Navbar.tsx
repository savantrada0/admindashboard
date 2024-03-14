import React from "react";
import "../assets/style.css";
import "../assets/dashboardstyle.css";
import { Navigate, Outlet } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../features/store.hooks";
import { Logout } from "../features/slices/userSlice";

const Navbar = () => {
  const dispatch = useAppDispatch();

  const user: any = useAppSelector((state) => state.user);
  const logout = () => {
    dispatch(Logout());
    localStorage.clear();
    return <Navigate replace to="/" />;
  };

  return (
    <div>
      <div className={user.user.token ? "usernav" : "nav"}>
        <span className={user.user.token ? "userlogo" : "logo"}>SOLGURUZ</span>
        {user.user.token && (
          <button onClick={logout} className="usericon">
            <UserOutlined />
          </button>
        )}
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
