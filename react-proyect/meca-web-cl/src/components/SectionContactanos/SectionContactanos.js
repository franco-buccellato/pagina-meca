import './SectionContactanos.css';

function SectionContactanos() {

    return (
        <div className="background-contactanos" id='section-contactanos'>
            <div className="container-section-contactanos">
                <h4>Una experiencia de calidad</h4>
                <p>Diseño, fabricación y puesta en marcha de tableros eléctricos para la generación y distribución de energía eléctrica.</p>
                {/* <Link to = {'/contactanos'}> */}
                <a href='#section-novedades'>
{/*                     <div className="buttom-contactanos">
                        <h3>Contáctanos</h3>
                    </div> */}
                </a>
                {/* </Link> */}
            </div>
            <div className="bottom-gradiente"></div>
        </div>
    );
}

export default SectionContactanos;