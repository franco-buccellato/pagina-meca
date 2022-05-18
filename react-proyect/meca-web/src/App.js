import './App.css';
import NavBar from './components/NavBar/NavBar';
import {useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import SectionContactanos from './components/SectionContactanos/SectionContactanos';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
        {/* <LeftBar/> */}
        <SectionContactanos/>
        <Routes>
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
