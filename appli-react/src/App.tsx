import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router";
import { useState } from "react";
import React from "react";

import "./styles/index.scss";
import { Personnalisation, Home } from "./pages/index";
// import { Personnalisation } from "./pages/Personnalisation.tsx";
// import { Home } from "./pages/Home.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/personnalisation"
          element={<Personnalisation datas={[]} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
