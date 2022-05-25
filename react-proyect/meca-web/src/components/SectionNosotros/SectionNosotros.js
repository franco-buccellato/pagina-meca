import './SectionNosotros.css'; 
import {Link} from 'react-router-dom';
import FotoDuenios from '../../imagenes/eugenio-dario-vector.png';
import FotoStaff from '../../imagenes/eugenio-dario-vector.png';

function SectionNosotros() {

    return (
        <div className="container-section-nosotros">
            <div className='container-nosotros-title'>
                <h4>¿Quiénes somos?</h4>
            </div>
            <div className="container-nosotros-border">
                <div className='container-nosotros-1'>
                    <div className='nosotros-1-duenios'>
                        <img alt='Foto-duenios' src={FotoDuenios}></img>
                    </div>
                    <div className='nosotros-1-detalles'>
                        <span><b>Somos una empresa Argentina enfocada en la ingeniería.</b></span>
                        <span>Poseemos 40 años de experiencia en el diseño y provisión de soluciones tecnológicas para la generación y distribución de energía eléctrica en los sectores de Oil & Gas, Industrias en general, sectores terciarios y en el rubro de las Telecomunicaciones.</span>
                    </div>
                </div>
                <div className='container-nosotros-2'>
                    <div className='nosotros-2-items'>
                        <div className='nosotros-2-items-1'>
                            <div className='nosotros-2-items-1-logo'>

                                <span><b>Staff</b></span>
                            </div>
                            <div className='nosotros-2-items-1-detalle'>
                                <span>Contamos con personal altamente capacitado para ofrecer las mejores soluciones a nuestros clientes a la medida de sus necesidades.</span>
                            </div>
                        </div>
                        <div className='nosotros-2-items-2'>
                            <div className='nosotros-2-items-2-logo'>

                                <span><b>Objetivo</b></span>
                            </div>
                            <div className='nosotros-2-items-2-detalle'>
                                <span>Nuestro principal objetivo es obtener la completa satisfacción de cada cliente que atendemos, a través de un trato personalizado.</span>
                            </div>
                        </div>
                        <div className='nosotros-2-items-3'>
                            <div className='nosotros-2-items-3-logo'>

                                <span><b>Progreso</b></span>
                            </div>
                            <div className='nosotros-2-items-3-detalle'>
                                <span>Creemos en la mejora continua y la excelencia de nuestro trabajo por lo que, poseemos departamentos especializados para la gestión de cada proceso.</span>
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