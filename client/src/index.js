import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Import Provider component from react-redux-dom
// Import store from Store
// Wrap app in Router, wrap Router in Provider, pass store as prop

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
