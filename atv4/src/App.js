import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Container from "./components/Container/Container";

import Home from "./pages/Home/Home";

function App() {
return(
  <div className="App">
    

    <BrowserRouter>
      <Container>
        <Routes>
          <Route index element={<Home/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
  </div>
  
);

}
export default App;