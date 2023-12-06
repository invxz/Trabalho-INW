
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Sobre from './pages/Sobre';
import Entrar from './pages/Entrar';
import NotaFiscal from './pages/NotaFiscal'
import React from 'react';

function App() {

  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/sobre" element={<Sobre/>}/>
          <Route path="/Entrar" element={<Entrar/>}/>
          <Route path="/NotaFiscal" element={<NotaFiscal/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
