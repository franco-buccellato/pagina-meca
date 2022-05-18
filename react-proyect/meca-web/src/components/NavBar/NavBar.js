import './NavBar.css';
import {Link} from 'react-router-dom';
import fondoPrincipal from '../../imagenes/fondo-encabezado.png'
import logoMecaIsologo from '../../imagenes/logo-meca-completa.png';

function NavBar() {

    return (
        <div className="navbar">
            <div className="background"></div>
            <div className="container-navigation">
                <div className="navigation">
                    <div className='container-logo-marca'>
                        <Link to = {'/'}>
                            <img className='logo-pagina' alt='Logo' src={logoMecaIsologo}></img>
                        </Link>
                    </div>
                    <ul className='navbar-style'>
                        <li className="list">
                            <Link to = {'/'}>
                            <h2 className='list-text'>Productos</h2>
                            </Link>
                        </li>
                        <li className="list">
                            <Link to = {'/'}>
                            <h2 className='list-text'>Clientes</h2>
                            </Link>
                        </li>
                        <li className="list">
                            <Link to = {'/'}>
                            <h2 className='list-text'>Empresa</h2>
                            </Link>
                        </li>
                        <li className="list">
                            <Link to = {'/'}>
                                <h2 className='list-text'>Novedades</h2>
                            </Link>
                        </li>
                        <li className="list-trabaja-con-nosotros">
                            <Link to = {'/'}>
                                <h2 className='list-text'>Trabajá con Nosotros</h2>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NavBar;