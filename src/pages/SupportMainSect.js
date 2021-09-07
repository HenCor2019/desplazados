import React, {useState} from 'react';
import Concepts from './images/support/concepts.png';
import Report from './images/support/report.png';
import Statistics from './images/support/statistics.png';

function SupportMainSect() {
  const [isConceptsHover, setConceptsHover] = useState(false);
  const [isReportHover, setReportHover] = useState(false);
  const [isStatisticsHover, setStatisticsHover] = useState(false);

  let style1, style2, style3;
  const grayscale = {filter: 'grayscale(1)'};

  if (isConceptsHover) {
    style2 = grayscale;
    style3 = grayscale;
  } else if (isReportHover) {
    style1 = grayscale;
    style2 = grayscale;
  } else if (isStatisticsHover) {
    style1 = grayscale;
    style3 = grayscale;
  }

  return (
    <main className="h-4/5 w-auto m-auto grid grid-cols-10 grid-rows-2 items-center overflow-y-auto">
      <a
        href=""
        className="md:mt-16 w-full col-start-1 col-end-4"
        onMouseEnter={() => setConceptsHover(true)}
        onMouseLeave={() => setConceptsHover(false)}
        loading="lazy"
      >
        <img src={Concepts} style={style1} className="w-5/6" />
      </a>
      <a
        href=""
        className="w-full col-start-4 col-end-7"
        onMouseEnter={() => setStatisticsHover(true)}
        onMouseLeave={() => setStatisticsHover(false)}
        loading="lazy"
      >
        <img src={Statistics} style={style2} className="w-5/6" />
      </a>
      <p className="mt-7 md:mt-0 md:row-start-2 col-start-1 md:col-end-7 text-sm col-end-10 box-content text-justify">
        Luego de la sentencia 411-2017 de la Corte Suprema de Justicia de El
        Salvador, el Estado se vio obligado a reconocer y legislar en favor de
        las víctimas de desplazamiento forzado por violencia. Tres años después,
        se aprobó una ley que carece de reglamento. Aunque existen acuerdos
        internacionales, como la Convención sobre Refugiados de 1951 y las
        Declaraciones de Cartagena y de Brasil, en El Salvador son documentos
        muertos. ¿A qué se enfrentan las familias cuando buscan apoyo de parte
        del Estado?
      </p>
      <a
        href=""
        className="w-full md:row-start-2 md:col-start-7 md:col-end-10 row-start-1 col-start-7 col-end-10 ml-0 md:ml-8"
        onMouseEnter={() => setReportHover(true)}
        onMouseLeave={() => setReportHover(false)}
        loading="lazy"
      >
        <img src={Report} style={style3} className="w-5/6" />
      </a>
    </main>
  );
}

export default SupportMainSect;
