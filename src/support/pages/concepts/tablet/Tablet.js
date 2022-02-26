import React, { useState } from 'react';
import { getNoteImage } from 'support/helpers/getNoteImage';
import i18next from 'i18next';
import title_es from '../../../assets/images/concepts/concepts-title_es.png';
import title_en from '../../../assets/images/concepts/concepts-title_en.png';
import ConceptTablet from '../../../components/concepts/ConceptTablet';
import concepts_es from '../../../../translations/es/support/pages/concepts.json';
import concepts_en from '../../../../translations/en/support/pages/concepts.json';

const Portrait = () => {
  const concepts = i18next.language === 'en' ? concepts_en : concepts_es;

  const [isActive, setActive] = useState(false);
  const [activeConcept, setActiveConcept] = useState(concepts[0]);

  const handleOnClick = conceptInfo => {
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
        className='w-64 md:w-72 lg:w-80 block mb-2'
        alt='Conceptos: Para conocer mejor'
      />
      <div className='w-full inline-block'>
        {concepts.map(concept => (
          <div className='flex justify-between'>
            <ConceptTablet
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
              <img src={getNoteImage(concept.index)} className='block flex-shrink-0 w-7/12' alt={concept.alt}></img>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portrait;
