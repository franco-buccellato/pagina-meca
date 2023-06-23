import './LeftBar.css'
/* import {Link} from 'react-router-dom'; */
import iconoLinkedin from '../../imagenes/icono-linkedin-small-min.webp';
import iconoInstagram from '../../imagenes/icono-instagram-small-min.webp';
import iconoFacebook from '../../imagenes/icono-facebook-small-min.webp';
import iconoYoutube from '../../imagenes/icono-youtube-small-min.webp';
import iconoWsp from '../../imagenes/icono-wsp-small-min.webp';


function LeftBar() {

    return (
        <div className="leftbar">
            <div className="container-navigation-left">
                <ul className='leftbar-style'>
                    <li className="column">
                        {/* <Link to = {'/'}> */}
                        <a href="https://www.linkedin.com/company/meca-electromec%C3%A1nica-s-a/" target="_blank" rel="noreferrer">
                            <img className='icono-leftbar' alt='Icono Linkedin' src={iconoLinkedin}></img>
                        </a>
                        {/* </Link> */}
                    </li>
                    <li className="column">
                        {/* <Link to = {'/'}> */}
                        <a href="https://www.instagram.com/mecaelectromecanica/" target="_blank" rel="noreferrer">
                            <img className='icono-leftbar' alt='Icono Instagram' src={iconoInstagram}></img>
                        </a>
                        {/* </Link> */}
                    </li>
                    <li className="column">
                        {/* <Link to = {'/'}> */}
                        <a href="https://www.facebook.com/mecaelectromecanica/" target="_blank" rel="noreferrer">
                            <img className='icono-leftbar' alt='Icono Facebook' src={iconoFacebook}></img>
                        </a>
                        {/* </Link> */}
                    </li>
                    <li className="column">
                        {/* <Link to = {'/'}> */}
                        <a href="https://www.youtube.com/channel/UCohcytkhjFq7If3w8YTZ17g" target="_blank" rel="noreferrer">
                            <img className='icono-leftbar' alt='Icono Youtube' src={iconoYoutube}></img>
                        </a>
                        {/* </Link> */}
                    </li>
                    <li className="column">
                        {/* <Link to = {'/'}> */}
                        <a href="https://wa.me/+5491155088881" target="_blank" rel="noreferrer">
                            <img className='icono-leftbar' alt='Icono WhatsApp' src={iconoWsp}></img>
                        </a>
                        {/* </Link> */}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default LeftBar;