import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Includes TailwindCSS styles
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // Matches the ID in index.html
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);