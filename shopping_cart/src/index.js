import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // provider use krne se redux ko react k sath link kr payenge aur usme store pass krna pdega
  <Provider store={store}>
    <App />
  </Provider>
);
