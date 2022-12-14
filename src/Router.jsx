import { Routes, Route, BrowserRouter } from 'react-router-dom';

import React from 'react'
import  Home  from './pages/Home';
import Cursos from './pages/Cursos';
import Vagas from './pages/Vagas';
import Network from './pages/Network';
import Header from './components/Header';

function ApplicationRoutes() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/cursos' element={<Cursos/>} />
            <Route path='/vagas' element={<Vagas/>} />
            <Route path='/network' element={<Network/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default ApplicationRoutes