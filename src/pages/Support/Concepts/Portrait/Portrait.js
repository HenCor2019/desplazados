
import React, { useState } from 'react';
import Title from '../../../../assets/images/Support/Concepts/concepts-title.png'
import ConceptPortrait from '../../../../Components/Concepts/ConceptPortrait'
import { concepts } from '../../../../constants/Concepts/SupportConcepts'

const Portrait = () => {
    const [isActive, setActive] = useState(false);
    const [activeConcept, setActiveConcept] = useState(concepts[0])

    const handleOnClick = (conceptInfo) => {
        setActive(!isActive);

        if (conceptInfo) setActiveConcept(conceptInfo);
    }

    return (
        <div>
            <img
                src={Title}
                className="w-64 md:w-72 lg:w-80 block mb-2"
                alt="Conceptos: Para conocer mejor"
            />
            <div className="md:flex md:flex-wrap md:items-center md:content-center md:justify-evenly p-2">
                {concepts.map((concept) => (
                    <div>
                    <ConceptPortrait
                        key={concept.index}
                        active={isActive}
                        concept={concept}
                        onClick={handleOnClick}
                    />
                    { activeConcept.index == concept.index && <img src={concept.src} alt={concept.alt} className="class"></img> }
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portrait