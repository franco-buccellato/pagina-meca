import './CarrouselClientes.css';
import cliente1 from '../../imagenes/cliente1-1.webp'
import cliente2 from '../../imagenes/cliente2-1.webp'
import cliente3 from '../../imagenes/cliente3-1.webp'
import cliente4 from '../../imagenes/cliente4-1.webp'
import cliente5 from '../../imagenes/cliente5-1.webp'
import cliente6 from '../../imagenes/cliente6-1.webp'
import cliente7 from '../../imagenes/cliente7-1.webp'
import cliente8 from '../../imagenes/cliente8-1.webp'
import cliente9 from '../../imagenes/cliente9-1.webp'
import cliente10 from '../../imagenes/cliente10-1.webp'


function CarrouselClientes() {
    return (
        <div  className="slider">
            <div  className="slide-track">
                <div  className="slide">
                    <img src={cliente1} alt="cliente1"/>
                </div>
                <div  className="slide">
                    <img src={cliente2} alt="cliente2"/>
                </div>
                <div  className="slide">
                    <img src={cliente3} alt="cliente3"/>
                </div>
                <div  className="slide">
                    <img src={cliente4} alt="cliente4"/>
                </div>
                <div  className="slide">
                    <img src={cliente5} alt="cliente5"/>
                </div>
                <div  className="slide">
                    <img src={cliente6} alt="cliente6"/>
                </div>
                <div  className="slide">
                    <img src={cliente7} alt="cliente7"/>
                </div>
                <div  className="slide">
                    <img src={cliente8} alt="cliente8"/>
                </div>
                <div  className="slide">
                    <img src={cliente9} alt="cliente9"/>
                </div>
                <div  className="slide">
                    <img src={cliente10} alt="cliente10"/>
                </div>
            </div>
        </div>
    );
}

export default CarrouselClientes;
