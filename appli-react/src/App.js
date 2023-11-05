import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router";
import { useState } from "react";

import './styles/index.scss';
import Home from './pages/Home';
import Personnalisation from './pages/Personnalisation';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/personnalisation" element={<Personnalisation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
