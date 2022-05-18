import './SectionContactanos.css';
import {Link} from 'react-router-dom';

function SectionContactanos() {

    return (
        <div className="container-section-contactanos">
            <h4>Una experiencia de calidad</h4>
            <p>Diseño, fabricación y puesta en marcha de tableros eléctricos para la generación y distribución de energía eléctrica.</p>
            <Link to = {'/'}>
                <div className="buttom-contactanos"><h3>Contactanos</h3></div>
            </Link>
        </div>
    );
}

export default SectionContactanos;