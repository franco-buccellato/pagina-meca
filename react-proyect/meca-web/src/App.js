import './App.css';
import NavBar from './components/NavBar/NavBar';
import {useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import SectionContactanos from './components/SectionContactanos/SectionContactanos';
import LeftBar from './components/LeftBar/LeftBar';
import SectionServicios from './components/SectionServicios/SectionServicios';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
        <LeftBar/>
        <SectionContactanos/>
        <Routes>
          {/* <Route exact path = '/' element = {<SectionContactanos/>}/> */}
          <Route exact path = '/productos' element = {<SectionServicios/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
