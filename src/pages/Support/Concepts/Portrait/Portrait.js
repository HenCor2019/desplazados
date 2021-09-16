
import React, { useState } from 'react';
import Title from '../../../../assets/images/Support/Concepts/concepts-title.png'
import ConceptPortrait from '../../../../Components/Concepts/ConceptPortrait'
import { concepts } from '../../../../constants/Concepts/SupportConcepts'

const Portrait = () => {
    const [isActive, setActive] = useState(false);
    const [activeConcept, setActiveConcept] = useState(concepts[0])

    const handleOnClick = (conceptInfo) => {
        if (conceptInfo.index == activeConcept.index && isActive) {
            setActive(false)
        }
        else {
            setActive(true)
        }
        setActiveConcept(conceptInfo);
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
                        concept={concept}
                        onClick={handleOnClick}
                        style={ (activeConcept.index == concept.index && isActive) ? 
                                "font-crayon py-4 px-4 ease-in-out w-auto hover:bg-brownie-gray cursor-pointer bg-brownie-gray" 
                                : "font-crayon py-4 px-4 ease-in-out w-auto hover:bg-brownie-gray cursor-pointer" }
                    />
                    { activeConcept.index == concept.index && isActive && <img src={concept.src} alt={concept.alt}></img> }
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portrait