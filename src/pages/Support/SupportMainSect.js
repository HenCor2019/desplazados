import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Concepts from '../../assets/images/Support/concepts.png';
import Report from '../../assets/images/Support/report.png';
import Statistics from '../../assets/images/Support/statistics.png';
import Hoverable from '../../wrappers/Hoverable/Hoverable';

function SupportMainSect() {
    const { push } = useHistory();
    const [isConceptsHover, setConceptsHover] = useState(false);
    const [isReportHover, setReportHover] = useState(false);
    const [isStatisticsHover, setStatisticsHover] = useState(false);

    let style1, style2, style3;
    const grayscale = { 'filter': 'grayscale(1)' }

    if (isConceptsHover) {
        style2 = grayscale;
        style3 = grayscale;
    }
    else if (isReportHover) {
        style1 = grayscale;
        style2 = grayscale;
    }
    else if (isStatisticsHover) {
        style1 = grayscale;
        style3 = grayscale;
    }

    return (
        <main className="h-auto w-full grid lg-2:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:grid-rows-min gap-4 p-0 sm:p-8 lg-2:p-4">
            <div className="h-auto flex sm:w-full items-center lg-2:items-end justify-start sm:justify-center lg-2:justify-start p-4 sm:p-0">
                <Hoverable src={ Concepts }
                    HtmlTag="img" 
                    alt="Concepto" 
                    style={ style1 } 
                    className="object-contain w-10/12 sm:w-3/4 sm:min-w-support-image cursor-pointer"
                    onClick={()=> { push("/apoyo/conceptos") }}
                    onHoverIn={() => setConceptsHover(true)} 
                    onHoverOut={() => setConceptsHover(false)} 
                    loading="lazy" />
            </div>
            <div className="flex h-auto w-full justify-end sm:items-center lg-2:items-start sm:justify-center lg-2:justify-start lg-2:col-span-2 sm:p-8 p-4">
                <Hoverable src={ Statistics } 
                    HtmlTag="img" 
                    alt="Estadísticas" 
                    style={ style2 } 
                    className="object-contain w-10/12 lg-2:w-3/8 sm:min-w-support-image cursor-pointer" 
                    onClick={()=> { push("/apoyo/estadisticas") }}
                    onHoverIn={() => setStatisticsHover(true)} 
                    onHoverOut={() => setStatisticsHover(false)} 
                    loading="lazy" />
            </div>
            <div className="bg-blue-900 sm:bg-transparent h-auto w-full lg-2:pr-8 lg-2:col-span-2 p-3 sm:p-0 row-start-4 row-end-5 sm:row-start-auto sm:row-end-auto">
                <p className="h-auto text-justify sm:mt-6 sm:pl-8 text-sm sm:text-base lg-2:pl-0 leading-6 text-white sm:text-black-700 font-acumin p-4 sm:p-0">Luego de la sentencia 411-2017 de la Corte Suprema de Justicia de El Salvador, el Estado se vio obligado a reconocer y legislar en favor de las víctimas de desplazamiento forzado por violencia. Tres años después, se aprobó una ley que carece de reglamento. Aunque existen acuerdos internacionales, como la Convención sobre Refugiados de 1951 y las Declaraciones de Cartagena y de Brasil, en El Salvador son documentos muertos. ¿A qué se enfrentan las familias cuando buscan apoyo de parte del Estado?</p>
            </div>
            <div className="flex sm:w-full items-center lg-2:items-start justify-start sm:justify-center lg-2:justify-start row-start-3 row-end-4 sm:row-start-auto sm:row-end-auto p-4 sm:p-0">
                <Hoverable src={ Report } 
                    HtmlTag="img" 
                    alt="Reporte" 
                    style={ style3 } 
                    className="object-contain w-10/12 sm:w-3/4 sm:min-w-support-image cursor-pointer"
                    onClick={()=> { push("/apoyo/reportajes") }}
                    onHoverIn={() => setReportHover(true)} 
                    onHoverOut={() => setReportHover(false)} 
                    loading="lazy" />
            </div>
        </main>
    )
}

export default SupportMainSect