import Landscape from './Lanscape/Landscape'
import Portrait from './Portrait/Portrait'
import Tablet from './Tablet/Tablet'
import { useConfigContext } from "../../../contexts/ConfigContext";
//import { LazySection } from '../../../HOC/LazySection/LazySection';

const Concepts = () => {
    const { isMobile } = useConfigContext();
    const { isTablet } = useConfigContext();
    let content = null;
    
    if(isMobile) {
        content = (<Portrait />)
    } 
    else if(isTablet) {
        content = (<Tablet />)
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

export default Concepts
