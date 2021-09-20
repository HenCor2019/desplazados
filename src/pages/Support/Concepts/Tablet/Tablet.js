import React, { useState } from 'react';
import Title from '../../../../assets/images/Support/Concepts/concepts-title.png'
import Concept from '../../../../Components/Concepts/Concept'
import { concepts } from '../../../../constants/Concepts/SupportConcepts'
import NotesImages from '../NotesImages';

const Tablet = () => {
    const [isActive, setActive] = useState(false);
    const [activeConcept, setActiveConcept] = useState(concepts[0])

    const handleOnClick = (conceptInformation) => {
        setActive(!isActive);

        if (conceptInformation) setActiveConcept(conceptInformation);
    }

    return (
        <div>
            <img
                src={Title}
                className="w-64 md:w-72 lg:w-80 block mb-2"
                alt="Conceptos: Para conocer mejor"
            />
            <div className="flex">
                <ul className="w-full inline-block">

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
                <div className="block flex-shrink-0 w-4/6">
                    <img src={activeConcept.src} alt={activeConcept.alt} className="m-auto"></img>
                </div>
            </div>
        </div>
    )
}

export default Tablet
