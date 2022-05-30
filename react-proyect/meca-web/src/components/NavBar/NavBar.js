import './NavBar.css';
import {Link} from 'react-router-dom';
import logoMecaIsologo from '../../imagenes/meca-logo-isologo.png';
import logoMecaTexto from '../../imagenes/logo-meca-text.png';

function NavBar() {

    const HideNavBar = () => {
        window.onscroll = function() {
            var currentScrollPos = window.pageYOffset;
            if (150 > currentScrollPos) {
                document.getElementById('navBar').style.background = '';
                document.getElementById('navBar').style.height = '150px';
                document.getElementById('navBar').style.paddingBottom = '0';
                document.getElementById('navBar').style.borderRadius = '0'
                document.getElementById('logo-navBar').src = logoMecaIsologo;
                document.getElementById('logo-navBar').style.marginBottom = '0';
            } else {
                document.getElementById('navBar').style.background = '#ffffffea';
                document.getElementById('navBar').style.height = '80px';
                document.getElementById('navBar').style.paddingBottom = '20px';
                document.getElementById('navBar').style.borderBottomLeftRadius = '30px';
                document.getElementById('navBar').style.borderBottomRightRadius = '30px';
                document.getElementById('logo-navBar').src = logoMecaTexto;
                document.getElementById('logo-navBar').style.marginBottom = '-35px';
            }
        }
    }

    function DesplegarMenu() {
        console.log('Debería estar desplegando Menu');
        document.getElementById('navbar-list-responsive').style.display = 'flex';
        document.getElementById('open').style.display = 'none';
        document.getElementById('close').style.display = 'flex';
    }

    function GuardarMenu() {
        console.log('Debería estar guardando el Menu');
        document.getElementById('navbar-list-responsive').style.display = 'none';
        document.getElementById('open').style.display = 'flex';
        document.getElementById('close').style.display = 'none';
    }

    HideNavBar();

    return (
        <div className="navbar" id='top-landig-page'>
            <div className="background"></div>
            <div className="container-navigation">
                <nav className="navigation" id='navBar'>
                    <div className='container-logo-marca' id='logo-nav-bar'>
                        {/* <Link to = {'/'}> */}
                        <a href='#top-landig-page'>
                            <img id='logo-navBar' className='logo-pagina' alt='Logo' src={logoMecaIsologo}></img>
                        </a>
                        {/* </Link> */}
                    </div>
                    <ul className='navbar-style'>
                        <li className="list" id='title-productos' >
                            {/* <Link to = {'/productos'}> */}
                            <a href='#section-servicios'>
                                <h2 className='list-text'>Productos</h2>
                            </a>
                            {/* </Link> */}
                        </li>
                        <li className="list" id='title-clientes' >
                            {/* <Link to = {'/'}> */}
                            <a href='#section-clientes'>
                                <h2 className='list-text'>Clientes</h2>
                            </a>
                            {/* </Link> */}
                        </li>
                        <li className="list" id='title-nosotros' >
                            {/* <Link to = {'/'}> */}
                            <a href='#section-nosotros'>
                                <h2 className='list-text'>Nosotros</h2>
                            </a>
                            {/* </Link> */}
                        </li>
                        <li className="list" id='title-empresa' >
                            {/* <Link to = {'/'}> */}
                            <a href='#section-empresa'>
                            <h2 className='list-text'>Empresa</h2>
                        </a>
                            {/* </Link> */}
                        </li>
                        <li className="list" id='title-novedades' >
                            {/* <Link to = {'/'}> */}
                            <a href='#section-novedades'>
                                <h2 className='list-text'>Novedades</h2>
                            </a>
                            {/* </Link> */}
                        </li>
                        <li className="list-trabaja-con-nosotros" id='title-trabaja-con-nosotros' >
                            {/* <Link to = {'/'}> */}
                            <a href='#section-contactanos'>
                                <h2 className='list-text' id='button-trabaja'>Trabajá con Nosotros</h2>
                            </a>
                            {/* </Link> */}
                        </li>
                    </ul>
                </nav>
                {/* RESPONSIVE */}
                <nav id='navigation-responsive' className='navigation-responsive'>
                    <div className='navbar-responsive-fijo'>
                        <div className='container-logo-marca-responsive' id='logo-nav-bar'>
                            {/* <Link to = {'/'}> */}
                            <a href='#top-landing-page'>
                                <img className='logo-pagina-responsive' alt='Logo' src={logoMecaTexto}></img>
                            </a>
                            {/* </Link> */}
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
                            {/* <Link to = {'/productos'}> */}
                            <a href='#section-servicios'>
                                <h2 className='list-text-responsive'><ion-icon name="hammer-outline"></ion-icon>Productos</h2>
                            </a>
                            {/* </Link> */}
                        </li>
                        <li className="list-responsive" id='title-clientes' >
                            {/* <Link to = {'/'}> */}
                            <a href='#section-clientes'>
                                <h2 className='list-text-responsive'><ion-icon name="file-tray-full-outline"></ion-icon>Clientes</h2>
                            </a>
                            {/* </Link> */}
                        </li>
                        <li className="list-responsive" id='title-nosotros' >
                            {/* <Link to = {'/'}> */}
                            <a href='#section-nosotros'>
                                <h2 className='list-text-responsive'><ion-icon name="people-outline"></ion-icon>Nosotros</h2>
                            </a>
                            {/* </Link> */}
                        </li>
                        <li className="list-responsive" id='title-empresa' >
                            {/* <Link to = {'/'}> */}
                            <a href='#section-empresa'>
                            <h2 className='list-text-responsive'><ion-icon name="business-outline"></ion-icon>Empresa</h2>
                        </a>
                            {/* </Link> */}
                        </li>
                        <li className="list-responsive" id='title-novedades' >
                            {/* <Link to = {'/'}> */}
                            <a href='#section-novedades'>
                                <h2 className='list-text-responsive'><ion-icon name="megaphone-outline"></ion-icon>Novedades</h2>
                            </a>
                            {/* </Link> */}
                        </li>
                        <li className="list-responsive" id='title-trabaja-con-nosotros' >
                            {/* <Link to = {'/'}> */}
                            <a href='#section-contactanos'>
                                <h2 className='list-text-responsive'><ion-icon name="git-pull-request-outline"></ion-icon>Trabajá con Nosotros</h2>
                            </a>
                            {/* </Link> */}
                        </li>
                    </ul>
                </nav>
                <div className="bottom-gradiente"></div>
            </div>
        </div>
    );
}

export default NavBar;