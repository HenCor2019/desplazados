import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Concepts from '../../assets/images/Support/concepts.png';
import Report from '../../assets/images/Support/report.png';
import Statistics from '../../assets/images/Support/statistics.png';

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
        <main className="w-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-rows-auto gap-4 p-12 md:pl-5 lg:p-4">
            <Link to="/conceptos" className="flex w-full items-center lg:items-end justify-center lg:justify-start p-3 md:p-0">
                <img src={Concepts} alt="Concepto" style={style1} className="object-contain w-full md:w-3/4 md:min-w-support-image cursor-pointer" onMouseEnter={() => setConceptsHover(true)} onMouseLeave={() => setConceptsHover(false)} loading="lazy" />
            </Link>
            <Link to="apoyo/estadisticas" className="flex h-auto w-full items-center lg:items-start justify-center lg:justify-start lg:col-span-2 md:p-8 p-0">
                <img src={Statistics} alt="Estadísticas" style={style2} className="object-contain w-full md:w-3/8 md:min-w-support-image cursor-pointer" onMouseEnter={() => setStatisticsHover(true)} onMouseLeave={() => setStatisticsHover(false)} loading="lazy"/>
            </Link>
            <div className="w-full lg:pr-8 lg:col-span-2 p-3 md:p-0">
                <p className="text-justify md:mt-6 leading-5">Luego de la sentencia 411-2017 de la Corte Suprema de Justicia de El Salvador, el Estado se vio obligado a reconocer y legislar en favor de las víctimas de desplazamiento forzado por violencia. Tres años después, se aprobó una ley que carece de reglamento. Aunque existen acuerdos internacionales, como la Convención sobre Refugiados de 1951 y las Declaraciones de Cartagena y de Brasil, en El Salvador son documentos muertos. ¿A qué se enfrentan las familias cuando buscan apoyo de parte del Estado?</p>
            </div>
            <Link to="/reportaje" className="flex w-full items-center lg:items-start justify-center lg:justify-start p-3 md:p-0">
                <img src={Report} alt="Reporte" style={style3} className="object-contain w-full md:w-3/4 md:min-w-support-image cursor-pointer" onMouseEnter={() => setReportHover(true)} onMouseLeave={() => setReportHover(false)} loading="lazy" />
            </Link>
        </main>
    )
}

export default SupportMainSect