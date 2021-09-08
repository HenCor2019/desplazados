import useWindowDimensions from "../../Hooks/UseWindowsDimensions";
import Landscape from "./Landscape/Landscape";
import Portrait from "./Portrait/Portrait";

const links = [
    { title: "Inicio", path: "/" },
    { title: "Causas", path: "/causas" },
    { title: "Tiempo de Espera", path: "/la-espera" },
    { title: "Los sueños", path: "/sueños" },
    { title: "En busca de apoyo", path: "/apoyo" },
];

function Section({ children, bannerLand }) {
    const dimensions = useWindowDimensions();

    const isMobile = dimensions.width <= 768;
    let layout = null;

    if(isMobile){
        layout = (
            <Portrait
                links = {links}>

                { children }

            </Portrait>
        );
    } else {
        layout = (
            <Landscape 
                links={links} 
                banner={ bannerLand }>
                
                { children }
            
            </Landscape>
        );
    }

    /** TODO: Crear layout en movil */

    return layout;
}

export default Section