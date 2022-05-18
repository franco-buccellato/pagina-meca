import './NavBar.css';
import {Link} from 'react-router-dom';
import logoMecaIsologo from '../../imagenes/meca-logo-isologo.png';
import logoMecaTexto from '../../imagenes/logo-meca-text.png';

function NavBar() {

    const HideNavBar = () => {
        window.onscroll = function() {
            var currentScrollPos = window.pageYOffset;
            if (200 > currentScrollPos) {
                document.getElementById('navBar').style.background = '';
                document.getElementById('navBar').style.height = '150px';
                document.getElementById('navBar').style.paddingBottom = '0';
                document.getElementById('navBar').style.borderRadius = '0'
                document.getElementById('logo-navBar').src = logoMecaIsologo;
                document.getElementById('logo-navBar').style.marginBottom = '0';
            } else {
                document.getElementById('navBar').style.background = '#ffffffea ';
                document.getElementById('navBar').style.height = '80px';
                document.getElementById('navBar').style.paddingBottom = '20px';
                document.getElementById('navBar').style.borderBottomLeftRadius = '30px';
                document.getElementById('navBar').style.borderBottomRightRadius = '30px';
                document.getElementById('logo-navBar').src = logoMecaTexto;
                document.getElementById('logo-navBar').style.marginBottom = '-35px';
            }
        }
    }

    HideNavBar();

    return (
        <div className="navbar">
            <div className="background"></div>
            <div className="container-navigation">
                <div className="navigation" id='navBar'>
                    <div className='container-logo-marca' id='logo-nav-bar'>
                        <Link to = {'/'}>
                            <img id='logo-navBar' className='logo-pagina' alt='Logo' src={logoMecaIsologo}></img>
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
                <div className="bottom-gradiente"></div>
            </div>
        </div>
    );
}

export default NavBar;