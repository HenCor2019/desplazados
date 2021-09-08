import useWindowDimensions from "../../Hooks/UseWindowsDimensions";
import Landscape from "./Landscape/Landscape";
import Portrait from "./Portrait/Portrait";

const links = [
    { title: "Inicio", path: "#" },
    { title: "Causas", path: "#" },
    { title: "Tiempo de Espera", path: "#" },
    { title: "Los sueños", path: "#" },
    { title: "En busca de apoyo", path: "#" },
];

function Section(props) {
    const dimensions = useWindowDimensions();

    const isMobile = dimensions.width < 768;
    let layout = null;

    if(isMobile){
        layout = (
            <Portrait
                links = {links}>

                { props.children }

            </Portrait>
        );
    } else {
        layout = (
            <Landscape 
                links={links} 
                banner={props.bannerLand}>
                
                { props.children }
            
            </Landscape>
        );
    }

    /** TODO: Crear layout en movil */

    return layout;
}

export default Section