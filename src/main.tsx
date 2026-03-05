import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// 🚨 경로가 수정된 부분: "./index.css" -> "./assets/index.css"
import "./assets/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);