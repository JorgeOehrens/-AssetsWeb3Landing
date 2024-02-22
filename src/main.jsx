import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import { StateContextProvider } from "./context/index";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>

    <ScrollToTop />
    <StateContextProvider>
    <App />
    </StateContextProvider>


  </BrowserRouter>
);
