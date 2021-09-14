import React, { useState } from 'react';
import Title from '../../../assets/images/Support/Concepts/concepts-title.png'
import Concept from '../../../Components/Concepts/Concept'

import Image0 from '../../../assets/images/Support/Concepts/notes/image0.png'
import Image1 from '../../../assets/images/Support/Concepts/notes/image1.png'
import Image2 from '../../../assets/images/Support/Concepts/notes/image2.png'
import Image3 from '../../../assets/images/Support/Concepts/notes/image3.png'
import Image4 from '../../../assets/images/Support/Concepts/notes/image4.png'
import Image5 from '../../../assets/images/Support/Concepts/notes/image5.png'
import Image6 from '../../../assets/images/Support/Concepts/notes/image6.png'
import Image7 from '../../../assets/images/Support/Concepts/notes/image7.png'
import Image8 from '../../../assets/images/Support/Concepts/notes/image8.png'
import Image9 from '../../../assets/images/Support/Concepts/notes/image9.png'
import Image10 from '../../../assets/images/Support/Concepts/notes/image10.png'
import Image11 from '../../../assets/images/Support/Concepts/notes/image11.png'
import Image12 from '../../../assets/images/Support/Concepts/notes/image12.png'
import Image13 from '../../../assets/images/Support/Concepts/notes/image13.png'
import Image14 from '../../../assets/images/Support/Concepts/notes/image14.png'
import Image15 from '../../../assets/images/Support/Concepts/notes/image15.png'
import Image16 from '../../../assets/images/Support/Concepts/notes/image16.png'
import Image17 from '../../../assets/images/Support/Concepts/notes/image17.png'
import Image18 from '../../../assets/images/Support/Concepts/notes/image18.png'
import Image19 from '../../../assets/images/Support/Concepts/notes/image19.png'
import Image20 from '../../../assets/images/Support/Concepts/notes/image20.png'
import Image21 from '../../../assets/images/Support/Concepts/notes/image21.png'
import Image22 from '../../../assets/images/Support/Concepts/notes/image22.png'
import Image23 from '../../../assets/images/Support/Concepts/notes/image23.png'
import Image24 from '../../../assets/images/Support/Concepts/notes/image24.png'
import Image25 from '../../../assets/images/Support/Concepts/notes/image25.png'

import NotesImages from './NotesImages';

const Concepts = () => {
    const [isActive, setActive] = useState(false);
    const [activeConcept, setActiveConcept] = useState(concepts[0])

    const handleOnClick = (conceptInformation) => {
        setActive(!isActive);
        console.log(conceptInformation)

        if(conceptInformation) setActiveConcept(conceptInformation);
    }

    return (
        <main className="p-4">
            <img
                src={Title}
                className="w-64 md:w-72 lg:w-80 block mb-2"
                alt="Conceptos: Para conocer mejor"
            />
            <ul className="flex flex-wrap justify-evenly p-2">

                {concepts.map((concept) => (
                    <Concept 
                        key={concept.index}
                        position={concept.position}
                        src={concept.src}
                        concept={concept}
                        onClick={handleOnClick}
                    />
                ))}
            </ul>
            <div className="lg:grid lg:grid-cols-3 h-auto lg:mt-4">
                <NotesImages content={activeConcept} />
            </div>
        </main>
    )
}

const concepts = [
    {
        index: 0,
        position: 0,
        src: Image0,
        alt: "Asilo"
    },
    {
        index: 1,
        position: 1,
        src: Image1,
        alt: "Reintegración"
    },
    {
        index: 2,
        position: 2,
        src: Image2,
        alt: "Solución duradera"
    },
    {
        index: 3,
        position: 0,
        src: Image3,
        alt: "Reasentamiento"
    },
    {
        index: 4,
        position: 1,
        src: Image4,
        alt: "Reintegración psicosocial"
    },
    {
        index: 5,
        position: 2,
        src: Image5,
        alt: "Migración"
    },
    {
        index: 6,
        position: 0,
        src: Image6,
        alt: "Migración regular"
    },
    {
        index: 7,
        position: 1,
        src: Image7,
        alt: "Principios rectores de los desplazamientos internos 1999"
    },
    {
        index: 8,
        position: 2,
        src: Image8,
        alt: "Declaración de Cartagena sobre refugiados 1984"
    },
    {
        index: 9,
        position: 0,
        src: Image9,
        alt: "Reintegración social"
    },
    {
        index: 10,
        position: 1,
        src: Image10,
        alt: "Marco Integral Regional de Protección y Soluciones para las Américas (MIRPS)"
    },
    {
        index: 11,
        position: 2,
        src: Image11,
        alt: "Refugiado (mandato)"
    },
    {
        index: 12,
        position: 0,
        src: Image12,
        alt: "Enfoque psicosocial"
    },
    {
        index: 13,
        position: 1,
        src: Image13,
        alt: "Migración irregular"
    },
    {
        index: 14,
        position: 2,
        src: Image14,
        alt: "Confinamiento"
    },
    {
        index: 15,
        position: 0,
        src: Image15,
        alt: "Desplazados internos"
    },
    {
        index: 16,
        position: 1,
        src: Image16,
        alt: "Asilo territorial"
    },
    {
        index: 17,
        position: 2,
        src: Image17,
        alt: "Convención sobre el estatuto de los refugiados, 1951"
    },

]

export default Concepts
