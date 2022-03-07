import React, { useState } from 'react';
import i18next from 'i18next';
import title_es from '../../../assets/images/concepts/concepts-title_es.png';
import title_en from '../../../assets/images/concepts/concepts-title_en.png';
import Concept from '../../../components/concepts/Concept';
import concepts_es from '../../../../translations/es/support/pages/concepts.json';
import concepts_en from '../../../../translations/en/support/pages/concepts.json';
import NotesImages from '../NotesImages';

function Landscape() {
  const concepts = i18next.language === 'en' ? concepts_en : concepts_es;

  const [isActive, setActive] = useState(false);
  const [activeConcept, setActiveConcept] = useState(concepts[0]);

  const handleOnClick = (conceptInformation) => {
    setActive(!isActive);

    if (conceptInformation) setActiveConcept(conceptInformation);
  };

  return (
    <div>
      <img
        src={i18next.language === 'en' ? title_en : title_es}
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
  );
}

export default Landscape;
