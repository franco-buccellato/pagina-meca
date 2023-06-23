import './Certificado.css'
const certificado = require.context('../../imagenes/Certificaciones/', true);


const Certificado = ({certificadoId, linkImagen, titulo, detalle}) => {

    return (
        <div className="container-componente-certificado">
            <div className="componente-certificado">
                <div className='certificado-foto'>
                    <img 
                        alt={certificadoId}
                        src = {certificado(`./` + linkImagen)}
                        /* width={200} */
                        /* height={300} */
                    ></img>
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