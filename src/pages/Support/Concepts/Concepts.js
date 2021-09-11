import React, { useState } from 'react';
import Title from '../../../assets/images/Support/Concepts/concepts-title.png'

const pStyle = "font-crayon py-1.5 px-4.5"

const Concepts = () => {
    const [isConceptsHover, setConceptsHover] = useState(false);

    let grayBg;

    if (isConceptsHover) {
        grayBg = { 'background-color': '#c5c5c5ee' }
    }

    return (
        <main className="p-4">
            <img
                src={Title}
                className="w-64 md:w-72 lg:w-80 block mb-2"
                alt="Conceptos: Para conocer mejor"
            />
            <ul className="flex flex-wrap justify-evenly p-2">
                <li className={pStyle}
                    style={grayBg}
                    onMouseEnter={() => setConceptsHover(true)}
                    onMouseLeave={() => setConceptsHover(false)}>
                    Asilo
                </li>
                <li className={pStyle} style={grayBg}>Reintegración</li>
                <li className={pStyle}>Soluciones duraderas</li>
                <li className={pStyle}>Reasentamiento</li>
                <li className={pStyle}>Reintegración psicosocial</li>
                <li className={pStyle}>Migración</li>
                <li className={pStyle}>Migración regular</li>
                <li className={pStyle}>Principios rectores de los desplazamientos internos 1999</li>
                <li className={pStyle}>Declaración de Cartagena sobre refugiados 1984</li>
                <li className={pStyle}>Reintegración social</li>
                <li className={pStyle}>Marco Integral Regional de Protección y Soluciones para las Américas (MIRPS) </li>
                <li className={pStyle}>Refugiado (mandato)</li>
                <li className={pStyle}>Enfoque psicosocial</li>
                <li className={pStyle}>Migración irregular</li>
                <li className={pStyle}>Confinamiento</li>
                <li className={pStyle}>Desplazados internos</li>
                <li className={pStyle}>Asilo territorial</li>
                <li className={pStyle}>Convención sobre el estatuto de los refugiados, 1951 </li>
                <li className={pStyle}>Protocolo sobre el estatuto de refugiados, 1967 </li>
                <li className={pStyle}>Migración forzada</li>
                <li className={pStyle}>Declaración y plan de acción de Brasil, 2014 </li>
                <li className={pStyle}>Asilo diplomático</li>
                <li className={pStyle}>Reintegración económica</li>
                <li className={pStyle}>Refugiado (1951)</li>
                <li className={pStyle}>Desplazamiento colectivo</li>
                <li className={pStyle}>Declaración de San Pedro Sula 2017</li>
            </ul>
        </main>
    )
}

export default Concepts
