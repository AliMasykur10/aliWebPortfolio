import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import MainPage from "./pages/main_page/mainPage";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainPage />
    </BrowserRouter>
  </React.StrictMode>
);
