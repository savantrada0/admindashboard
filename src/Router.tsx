import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Loginscreen from "./pages/Auth";
import Resetscreen from "./pages/Resetscreen";
import Fogetpass from "./pages/Fogetpass";
import Otpscreen from "./pages/Otpscreen";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Dashboardmain from "./pages/Dashboardmain";

type routerProps = {
  event: any;
  setEvent: any;
};

const Router = ({ event, setEvent }: routerProps) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginscreen />} />
        <Route path="/fogetpass" element={<Fogetpass />} />
        <Route path="/otp" element={<Otpscreen />} />
        <Route path="/reset" element={<Resetscreen />} />
        <Route
          path="/home"
          element={
            <Layout event={event} setEvent={setEvent}>
              {event ? <Dashboard /> : <Dashboardmain />}
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
