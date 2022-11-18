import React, { useState, useEffect } from "react";
import TAC from "./pages/TAC";
import ProductDisplay from './ProductDisplay'
import "./App.css";
import {Link, Routes, Route } from "react-router-dom";
function App() {
  return (
  <>
   
<Routes>
<Route path="/" element={<ProductDisplay/>}/>
  <Route path="/terms-and-conditions" element={<TAC/>}/>
</Routes>
  </>
  )
  }


export default App
