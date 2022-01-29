import React, { useState } from 'react';
import Title from '../../../assets/images/concepts/concepts-title.png'
import ConceptTablet from '../../../components/concepts/ConceptTablet'
import { concepts } from '../../../constants/SupportConcepts'

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
            <div className="w-full inline-block">
                {concepts.map((concept) => (
                    <div className="flex justify-between">
                    <ConceptTablet
                        key={concept.index}
                        concept={concept}
                        onClick={handleOnClick}
                        style={ (activeConcept.index == concept.index && isActive) ? 
                                "font-crayon py-4 px-4 ease-in-out w-auto hover:bg-brownie-gray cursor-pointer bg-brownie-gray" 
                                : "font-crayon py-4 px-4 ease-in-out w-auto hover:bg-brownie-gray cursor-pointer" }
                    />
                    { activeConcept.index == concept.index && isActive && <img src={concept.src} className="block flex-shrink-0 w-7/12" alt={concept.alt}></img> }
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portrait
