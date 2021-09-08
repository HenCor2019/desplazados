import React, { useState } from 'react';
import Concepts from './images/support/concepts.png';
import Report from './images/support/report.png';
import Statistics from './images/support/statistics.png';

function SupportMainSect() {
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
        <main className="h-full w-auto grid md:grid-cols-3 grid-cols-1 grid-rows-auto gap-4 p-4 overflow-y-auto">
            <div className="flex w-full items-end p-3 md:p-0">
                <img src={Concepts} style={style1} className="object-contain w-full md:w-3/4 cursor-pointer" onMouseEnter={() => setConceptsHover(true)} onMouseLeave={() => setConceptsHover(false)} loading="lazy" />
            </div>
            <div className="flex h-auto w-full items-start md:col-span-2 md:p-8 p-0">
                <img src={Statistics} style={style2} className="object-contain w-full md:w-3/8 cursor-pointer" onMouseEnter={() => setStatisticsHover(true)} onMouseLeave={() => setStatisticsHover(false)} loading="lazy" />
            </div>
            <div className="flex w-full md:col-span-2 p-3 md:p-0">
                <p className="text-justify md:pr-20 md:mt-8 leading-5">Luego de la sentencia 411-2017 de la Corte Suprema de Justicia de El Salvador, el Estado se vio obligado a reconocer y legislar en favor de las víctimas de desplazamiento forzado por violencia. Tres años después, se aprobó una ley que carece de reglamento. Aunque existen acuerdos internacionales, como la Convención sobre Refugiados de 1951 y las Declaraciones de Cartagena y de Brasil, en El Salvador son documentos muertos. ¿A qué se enfrentan las familias cuando buscan apoyo de parte del Estado?</p>
            </div>
            <div className="flex w-full items-start p-3 md:p-0">
                <img src={Report} style={style3} className="object-contain w-full md:w-3/4 cursor-pointer" onMouseEnter={() => setReportHover(true)} onMouseLeave={() => setReportHover(false)} loading="lazy" />
            </div>
        </main>
    )
}

export default SupportMainSect