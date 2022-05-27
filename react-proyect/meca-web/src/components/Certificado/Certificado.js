import './Certificado.css'
import certificadoTest from '../../imagenes/lvpanel-schneider-certificaciones.png';

const Certificado = ({certificadoId, linkImagen, titulo, detalle}) => {

    return (
        <div className="container-componente-certificado">
            <div className="componente-certificado">
                <div className='certificado-foto'>
                    <img alt={certificadoId} src={certificadoTest}></img>
                    {console.log(linkImagen)}
                </div>
                <div className='certificado-titulo'>
                    <span><b>{titulo}</b></span>
                </div>
                <div className='certificado-detalle'>
                    <span>{detalle}</span>
                </div>
            </div>
        </div>
    );
}

export default Certificado;