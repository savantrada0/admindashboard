import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "../assets/dashboardstyle.css";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../features/store.hooks";

type layoutProps = {
  event: any;
  setEvent: any;
  children: any;
};

const Layout = ({ children, event, setEvent }: layoutProps) => {
  const user = useAppSelector((state) => state.user);
  if (!user.user.token) {
    return <Navigate replace to="/" />;
  }
  return (
    <div className="mainscreen">
      <Navbar />
      <div className="maincontainer">
        <Sidebar event={event} setEvent={setEvent} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
