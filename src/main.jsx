import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import { TransactionProvider } from "./context/TransactionContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>

    <ScrollToTop />
    <TransactionProvider>

    <App />
    </TransactionProvider>

  </BrowserRouter>
);
