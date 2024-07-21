import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home";
import "./index.css";
import Navbar from "./organisms/navbar/navbar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="container px-20 mx-auto">
      <Navbar />
      <Home />
    </div>
  </React.StrictMode>
);
