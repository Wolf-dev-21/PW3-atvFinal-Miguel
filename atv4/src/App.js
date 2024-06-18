import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import NavBar from "./components/NavBar/NavBar";
import Container from "./components/Container/Container";

import Home from "./pages/Home/Home";
import NovoTurma from "./pages/Home/NovaTurma/NovoTurma";
import Turma from "./pages/Home/Turma";
import EditarTurma from "./pages/Editar_Turma/EditarTurma";


function App() {
return(
  <div className="App">
    

    <BrowserRouter>
      <Container>
        <Routes>
          <Route path='/' element={<NavBar/>}>
          <Route index element={<Home/>}/>
          <Route path='/NovoTurma' element={<NovoTurma/>}/>
          <Route path='/Turma' element={<Turma/>}/>
          <Route path='/EditarTurma' element={<EditarTurma/>}/>
    
          

          </Route>
        </Routes>
      </Container>
    </BrowserRouter>
  </div>
  
);

}
export default App;