import './App.css';
import NavBarGestor from './components/NavBar/NavBarGestor';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import LeftBar from './components/LeftBar/LeftBar';
import ProductoDetailContainer from './components/ProductoDetailContainer/ProductoDetailContainer';
import PageProductos from './components/PageProductos/PageProductos';
import LandingPage from './components/LandingPage/LandingPage';
import Maps from './components/Maps/Maps';

function App() {
  return (
    <BrowserRouter>
      <NavBarGestor/>
      <LeftBar/>
      <Routes>
        <Route exact path = '/' element = {<LandingPage/>}/>
        <Route exact path = '/productos' element = {<PageProductos/>}/>
        <Route exact path = '/productDetail/:productId' element = {<ProductoDetailContainer/>}/>
      </Routes>
      <Footer/>
      <Maps/>
    </BrowserRouter>
  );
}

export default App;
