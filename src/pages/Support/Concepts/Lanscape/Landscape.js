import React, { useState } from 'react';
import Title from '../../../../assets/images/Support/Concepts/concepts-title.png'
import Concept from '../../../../Components/Concepts/Concept'
import { concepts } from '../../../../constants/Concepts/SupportConcepts'
import NotesImages from '../NotesImages';

const Landscape = () => {
    const [isActive, setActive] = useState(false);
    const [activeConcept, setActiveConcept] = useState(concepts[0])

    const handleOnClick = (conceptInformation) => {
        setActive(!isActive);
        
        if(conceptInformation) setActiveConcept(conceptInformation);
    }

    return (
        <div>
            <img
                src={Title}
                className="w-64 md:w-72 lg:w-80 block mb-2"
                alt="Conceptos: Para conocer mejor"
            />
            <ul className="md:flex md:flex-wrap md:items-center md:content-center md:justify-evenly p-2">

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
        </div>
    )
}

export default Landscape
