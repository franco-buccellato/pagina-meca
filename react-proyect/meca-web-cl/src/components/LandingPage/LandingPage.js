import SectionContactanos from '../SectionContactanos/SectionContactanos';
import SectionServicios from '../SectionServicios/SectionServicios';
/* import SectionProductosListContainer from '../SectionProductosListContainer/SectionProductosListContainer'; */
import SectionNosotros from '../SectionNosotros/SectionNosotros';
import SectionEmpresa from '../SectionEmpresa/SectionEmpresa';
import SectionCertificados from '../SectionCertificados/SectionCertificados';
import SectionClientes from '../SectionClientes/SectionClientes';
import SectionNovedades from '../SectionNovedades/SectionNovedades';
import Footer from '../Footer/Footer';


const LandingPage = () => {
    return (
        <div>
            <div><SectionContactanos/></div>
            <div><SectionServicios/></div>
            {/* <div><SectionProductosListContainer/></div> */}
            <div><SectionNosotros/></div>
            <div><SectionEmpresa/></div>
            <div><SectionCertificados/></div>
            <div><SectionClientes/></div>
            <div><SectionNovedades/></div>
            <div><Footer/></div>
        </div>
    );
}
export default LandingPage;