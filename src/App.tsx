import React, { useState } from "react";
import "./App.css";
import "antd/dist/reset.css";
import Router from "./Router";
import axios from "axios";

axios.defaults.baseURL = "https://dummyjson.com";

const App: React.FunctionComponent = () => {
  const [event, setEvent] = useState<any>(false);
  return (
    <>
      <Router event={event} setEvent={setEvent} />
    </>
  );
};

export default App;
