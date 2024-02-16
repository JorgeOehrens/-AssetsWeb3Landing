import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/images/logo/coin.svg";
import { Routes, Route } from "react-router-dom";
import routes from "./pages/index";

import "./App.css";

function App() {
  return (

    <Routes>
      {routes.map((data, index) => (
        <Route
          onUpdate={() => window.scrollTo(0, 0)}
          exact={true}
          path={data.path}
          element={data.component}
          key={index}
        />
      ))}
    </Routes>

  );
}

export default App;
