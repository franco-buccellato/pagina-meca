import './SectionNosotros.css'; 
import {Link} from 'react-router-dom';
import FotoDuenios from '../../imagenes/eugenio-dario.png';
import FotoStaff from '../../imagenes/STAFF4.jpg';
import LogoStaff from '../../imagenes/icono-staff.png';
import LogoObjetivo from '../../imagenes/icono-objetivo.png';
import LogoProgreso from '../../imagenes/icono-progreso.png';
import {getTextNosotros} from '../repositorioNosotros';

function SectionNosotros() {

    const textosPaginaNosotros = getTextNosotros();

    return (
        <div className="container-section-nosotros">
            <div className='container-nosotros-title'>
                <h4>{textosPaginaNosotros.titulo}</h4>
            </div>
            <div className="container-nosotros-border">
                <div className='container-nosotros-1'>
                    <div className='nosotros-1-duenios'>
                        <img alt='Foto-duenios' src={FotoDuenios}></img>
                    </div>
                    <div className='nosotros-1-detalles'>
                        <span><b>{textosPaginaNosotros.subTitulo}</b></span>
                        <span>{textosPaginaNosotros.descripcion}</span>
                    </div>
                </div>
                <div className='container-nosotros-2'>
                    <div className='nosotros-2-items'>
                        <div className='nosotros-2-items-1'>
                            <div className='nosotros-2-items-1-logo'>
                                <img alt='logo-staff' src={LogoStaff}></img>
                                <span><b>Staff</b></span>
                            </div>
                            <div className='nosotros-2-items-1-detalle'>
                                <span>{textosPaginaNosotros.staffDetalle}</span>
                            </div>
                        </div>
                        <div className='nosotros-2-items-2'>
                            <div className='nosotros-2-items-2-logo'>
                                <img alt='logo-objetivo' src={LogoObjetivo}></img>
                                <span><b>Objetivo</b></span>
                            </div>
                            <div className='nosotros-2-items-2-detalle'>
                                <span>{textosPaginaNosotros.objetivoDetalle}</span>
                            </div>
                        </div>
                        <div className='nosotros-2-items-3'>
                            <div className='nosotros-2-items-3-logo'>
                                <img alt='logo-progreso' src={LogoProgreso}></img>
                                <span><b>Progreso</b></span>
                            </div>
                            <div className='nosotros-2-items-3-detalle'>
                                <span>{textosPaginaNosotros.progresoDetalle}</span>
                            </div>
                        </div>
                    </div>
                    <div className='nosotros-2-staff'>
                        <img alt='Foto-staff' src={FotoStaff}></img>
                    </div>
                </div>
                <div className='container-nosotros-conocenos'>
                    <Link to = {'/nosotros'}>
                        <div className="buttom-conocenos">
                            <h3>¡Conócenos!</h3>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SectionNosotros;