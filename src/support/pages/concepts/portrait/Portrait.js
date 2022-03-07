import React, { useState } from 'react';
import { getNoteImage } from 'support/helpers/getNoteImage';
import i18next from 'i18next';
import title_es from '../../../assets/images/concepts/concepts-title_es.png';
import title_en from '../../../assets/images/concepts/concepts-title_en.png';
import ConceptPortrait from '../../../components/concepts/ConceptPortrait';
import concepts_es from '../../../../translations/es/support/pages/concepts.json';
import concepts_en from '../../../../translations/en/support/pages/concepts.json';

function Portrait() {
  const concepts = i18next.language === 'en' ? concepts_en : concepts_es;

  const [isActive, setActive] = useState(false);
  const [activeConcept, setActiveConcept] = useState(concepts[0]);

  const handleOnClick = (conceptInfo) => {
    if (conceptInfo.index === activeConcept.index && isActive) {
      setActive(false);
    } else {
      setActive(true);
    }
    setActiveConcept(conceptInfo);
  };

  return (
    <div>
      <img
        src={i18next.language === 'en' ? title_en : title_es}
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
              style={
                activeConcept.index === concept.index && isActive
                  ? 'font-crayon py-4 px-4 ease-in-out w-auto hover:bg-brownie-gray cursor-pointer bg-brownie-gray'
                  : 'font-crayon py-4 px-4 ease-in-out w-auto hover:bg-brownie-gray cursor-pointer'
              }
            />
            {activeConcept.index === concept.index && isActive && (
              <img src={getNoteImage(concept.index)} alt={concept.alt} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portrait;
