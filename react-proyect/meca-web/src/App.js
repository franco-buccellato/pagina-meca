import './App.css';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import LeftBar from './components/LeftBar/LeftBar';
import ProductoDetailContainer from './components/ProductoDetailContainer/ProductoDetailContainer';
import PageProductos from './components/PageProductos/PageProductos';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <LeftBar/>
      <Routes>
        <Route exact path = '/' element = {<LandingPage/>}/>
        <Route exact path = '/productos' element = {<PageProductos/>}/>
        <Route exact path = '/productDetail/:productId' element = {<ProductoDetailContainer/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
