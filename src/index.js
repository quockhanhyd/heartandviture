// import { ConfigProvider } from "antd";
// import vnVN from "antd/lib/locale/vi_VN";
import React from "react";
import ReactDOM from "react-dom/client";
import moment from "moment";
import "./index.scss";
import App from "./App";
// import "./translate";
import ThemeProvider from "./theme/index";

moment.locale("vi");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    {/* <ConfigProvider locale={vnVN}> */}
    <App />
    {/* </ConfigProvider> */}
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
