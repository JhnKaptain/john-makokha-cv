import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css"; // ✅ must exist in src/

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
