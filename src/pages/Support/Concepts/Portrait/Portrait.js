
import React, { useState } from 'react';
import Title from '../../../../assets/images/Support/Concepts/concepts-title.png'
import ConceptPortrait from '../../../../Components/Concepts/ConceptPortrait'
import { concepts } from '../../../../constants/Concepts/SupportConcepts'

const Portrait = () => {
    return (
        <div>
            <img
                src={Title}
                className="w-64 md:w-72 lg:w-80 block mb-2"
                alt="Conceptos: Para conocer mejor"
            />
            <div className="md:flex md:flex-wrap md:items-center md:content-center md:justify-evenly p-2">
                {concepts.map((concept) => (
                    <ConceptPortrait
                        key={concept.index}
                        concept={concept}
                    />
                ))}
            </div>
        </div>
    )
}

export default Portrait