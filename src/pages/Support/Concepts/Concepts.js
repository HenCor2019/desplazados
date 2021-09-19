import Landscape from './Lanscape/Landscape'
import Portrait from './Portrait/Portrait'
import { useConfigContext } from "../../../contexts/ConfigContext";
import { LazySection } from '../../../HOC/LazySection/LazySection';

const Concepts = () => {
    const { isMobile } = useConfigContext();
    let content = null;
    
    if(isMobile) {
        content = (<Portrait />)
    } 
    else {
        content = (<Landscape />)
    }

    return (
        <main className="p-4">
            { content }
        </main>
    )
}

export default LazySection(Concepts)
