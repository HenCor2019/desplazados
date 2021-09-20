import TitleDeco from '../../../assets/images/Support/Reportage/purple-paper-min.png'
import Landscape from './Sections/Landscape/Landscape';
import Portrait from './Sections/Portrait/Portrait';

import { useConfigContext } from "../../../contexts/ConfigContext";
import { LazySection } from '../../../HOC/LazySection/LazySection';

const Reportages = () => {
    const { isMobile } = useConfigContext();
    const { isTablet } = useConfigContext();
    let reportage = null;
    
    if(isTablet || isMobile) {
        reportage = ( <Portrait /> )
    } 
    else {
        reportage = ( <Landscape /> )
    }

    return (
        <main className="p-0 md:p-4 xl-2:p-8">
            <div className="w-full flex flex-nowrap mb-2 md:mb-4 p-4">
                <p className="font-sans text-title bg-white md:w-11/12 w-full p-4 xl-2:text-5xl">LOS SALVADOREÑOS QUE DEJAN TODO PARA SALVAR LA VIDA</p>
                <img src={TitleDeco} className="md:w-20 hidden md:inline-block" alt="Los salvadoreños que dejan todo para salvar la vida" />
            </div>
            <p className="leading-6 md:pr-8 font-acumin font-bold text-lg text-black-700 p-4">
                Según ACNUR, el 2020 cerró con un aproximado de 71 mil 500 personas desplazadas en El Salvador. La causa es la violencia ejercida por las pandillas y, en ocasiones, por los cuerpos de seguridad. Jackeline, Roberto y sus hijos son solo una familia más de las muchas que llegan a las instituciones de gobierno buscando ayuda, y al no encontrarla, se abocan a las organizaciones de la sociedad civil quienes asumen, de alguna manera, una responsabilidad que constitucionalmente corresponde al Estado.</p>
            { reportage }
        </main>
    )
}

// export default LazySection(Reportages);
export default Reportages;