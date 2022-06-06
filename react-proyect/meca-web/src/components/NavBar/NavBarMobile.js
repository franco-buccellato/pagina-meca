import './NavBarMobile.css';
import {Link} from 'react-router-dom';
import logoMecaTexto from '../../imagenes/logo-meca-text.webp';

function NavBarMobile({estaEnSupPage}) {
    function DesplegarMenu() {
        document.getElementById('navbar-list-responsive').style.display = 'flex';
        document.getElementById('open').style.display = 'none';
        document.getElementById('close').style.display = 'flex';
    }

    function GuardarMenu() {
        document.getElementById('navbar-list-responsive').style.display = 'none';
        document.getElementById('open').style.display = 'flex';
        document.getElementById('close').style.display = 'none';
    }
    if(estaEnSupPage !== '/') {
        return (
            <div className="navbar" id='top-landig-page'>
                <div className="background"></div>
                <div className="container-navigation">
                    <nav id='navigation-responsive' className='navigation-responsive'>
                        <div className='navbar-responsive-fijo'>
                            <div className='container-logo-marca-responsive' id='logo-nav-bar'>
                                <Link to = {'/'}>
                                    <img className='logo-pagina-responsive' alt='Logo' src={logoMecaTexto}></img>
                                </Link>
                            </div>
                            <div id='open' className='container-open' onClick={() => DesplegarMenu()}>
                                <div className="open">
                                    <ion-icon name="menu-outline" size='large'></ion-icon>
                                </div>
                            </div>
                            <div id='close' className='container-close' onClick={() => GuardarMenu()}>
                                <div className="cerrar">
                                    <ion-icon name="close-outline" size='large'></ion-icon>
                                </div>
                            </div>
                        </div>
                        <ul className='navbar-list-responsive' id='navbar-list-responsive'>
                            <li className="list-responsive" id='title-productos' >
                                <Link to = {'/'}>
                                    <h2 className='list-text-responsive'><ion-icon name="hammer-outline"></ion-icon>Productos</h2>
                                </Link>
                            </li>
                            <li className="list-responsive" id='title-clientes' >
                                <Link to = {'/'}>
                                    <h2 className='list-text-responsive'><ion-icon name="file-tray-full-outline"></ion-icon>Clientes</h2>
                                </Link>
                            </li>
                            <li className="list-responsive" id='title-nosotros' >
                                <Link to = {'/'}>
                                    <h2 className='list-text-responsive'><ion-icon name="people-outline"></ion-icon>Nosotros</h2>
                                </Link>
                            </li>
                            <li className="list-responsive" id='title-empresa' >
                                <Link to = {'/'}>
                                    <h2 className='list-text-responsive'><ion-icon name="business-outline"></ion-icon>Empresa</h2>
                                </Link>
                            </li>
                            <li className="list-responsive" id='title-novedades' >
                                <Link to = {'/'}>
                                    <h2 className='list-text-responsive'><ion-icon name="megaphone-outline"></ion-icon>Novedades</h2>
                                </Link>
                            </li>
                            <li className="list-responsive" id='title-trabaja-con-nosotros' >
                                <Link to = {'/'}>
                                    <h2 className='list-text-responsive'><ion-icon name="git-pull-request-outline"></ion-icon>Trabajá con Nosotros</h2>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="bottom-gradiente"></div>
                </div>
            </div>
        )
    }
    return (
        <div className="navbar" id='top-landig-page'>
            <div className="background"></div>
            <div className="container-navigation">
                <nav id='navigation-responsive' className='navigation-responsive'>
                    <div className='navbar-responsive-fijo'>
                        <div className='container-logo-marca-responsive' id='logo-nav-bar'>
                            <a href='#top-landig-page'>
                                <img className='logo-pagina-responsive' alt='Logo' src={logoMecaTexto}></img>
                            </a>
                        </div>
                        <div id='open' className='container-open' onClick={() => DesplegarMenu()}>
                            <div className="open">
                                <ion-icon name="menu-outline" size='large'></ion-icon>
                            </div>
                        </div>
                        <div id='close' className='container-close' onClick={() => GuardarMenu()}>
                            <div className="cerrar">
                                <ion-icon name="close-outline" size='large'></ion-icon>
                            </div>
                        </div>
                    </div>
                    <ul className='navbar-list-responsive' id='navbar-list-responsive'>
                        <li className="list-responsive" id='title-productos' >
                            <a href='#section-servicios'>
                                <h2 className='list-text-responsive'><ion-icon name="hammer-outline"></ion-icon>Productos</h2>
                            </a>
                        </li>
                        <li className="list-responsive" id='title-clientes' >
                            <a href='#section-clientes'>
                                <h2 className='list-text-responsive'><ion-icon name="file-tray-full-outline"></ion-icon>Clientes</h2>
                            </a>
                        </li>
                        <li className="list-responsive" id='title-nosotros' >
                            <a href='#section-nosotros-id'>
                                <h2 className='list-text-responsive'><ion-icon name="people-outline"></ion-icon>Nosotros</h2>
                            </a>
                        </li>
                        <li className="list-responsive" id='title-empresa' >
                            
                            <a href='#section-empresa'>
                            <h2 className='list-text-responsive'><ion-icon name="business-outline"></ion-icon>Empresa</h2>
                        </a>
                        </li>
                        <li className="list-responsive" id='title-novedades' >
                            <a href='#section-novedades'>
                                <h2 className='list-text-responsive'><ion-icon name="megaphone-outline"></ion-icon>Novedades</h2>
                            </a>
                        </li>
                        <li className="list-responsive" id='title-trabaja-con-nosotros' >
                            <a href='#section-contactanos'>
                                <h2 className='list-text-responsive'><ion-icon name="git-pull-request-outline"></ion-icon>Trabajá con Nosotros</h2>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="bottom-gradiente"></div>
            </div>
        </div>
    );
}

export default NavBarMobile;