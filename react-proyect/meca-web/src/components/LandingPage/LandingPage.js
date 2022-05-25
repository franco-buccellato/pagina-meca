import SectionContactanos from '../SectionContactanos/SectionContactanos';
import SectionServicios from '../SectionServicios/SectionServicios';
import SectionProductosListContainer from '../SectionProductosListContainer/SectionProductosListContainer';
import SectionNosotros from '../SectionNosotros/SectionNosotros';
import SectionEmpresa from '../SectionEmpresa/SectionEmpresa';


const LandingPage = () => {
    return (
        <div>
            <div><SectionContactanos/></div>
            <div><SectionServicios/></div>
            <div><SectionProductosListContainer/></div>
            <div><SectionNosotros/></div>
            <div><SectionEmpresa/></div>
        </div>
    );
}
export default LandingPage;