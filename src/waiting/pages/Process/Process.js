import React, { useState } from 'react';

import Subtitle from 'waiting/components/Subtitle/subtitle';
import Image from 'waiting/components/ImageArrow/image';

import Image1_es from 'waiting/assets/images/process/1_es.png';
import Image2_es from 'waiting/assets/images/process/2_es.png';
import Image3_es from 'waiting/assets/images/process/3_es.png';
import Image4_es from 'waiting/assets/images/process/4_es.png';
import Image5_es from 'waiting/assets/images/process/5_es.png';

import Image1_en from 'waiting/assets/images/process/1_en.png';
import Image2_en from 'waiting/assets/images/process/2_en.png';
import Image3_en from 'waiting/assets/images/process/3_en.png';
import Image4_en from 'waiting/assets/images/process/4_en.png';
import Image5_en from 'waiting/assets/images/process/5_en.png';

import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

import { LazySection } from 'shared/components/LazySection/LazySection';

function WaitingTimeProcess() {
  const [t] = useTranslation('waitingPagesProcessProcess');

  const [selectedTab, setSelectedTab] = useState(i18next.language == 'en' ? Image1_en : Image1_es);

  function onClickHandler(currentImage) {
    setSelectedTab(currentImage);
  }

  return (
    <div className="flex justify-center items-center flex-rigid">
      <div className="flex flex-col justify-center items-center w-10/12 sm:w-7/12 pb-4">
        <h1
          style={{ color: '#951b3c8a' }}
          className="font-sans text-lg sm:text-2xl font-extralight text-center p-2"
        >
          {t('title')}
        </h1>
        <Subtitle name={t('firstStep')} color="#F76856" />
        <Image src={i18next.language == 'en' ? Image5_en : Image5_es} alt={t('firstStep')} />
        <Subtitle name={t('secondStep')} color="#3722FF" />
        <Image src={i18next.language == 'en' ? Image4_en : Image4_es} alt={t('secondStep')} />
        <Subtitle name={t('thirdStep')} color="#2D0775" />
        <Image src={i18next.language == 'en' ? Image3_en : Image3_es} alt={t('thirdStep')} />
        <Subtitle name={t('fourthStep')} color="#FF881F" />
        <Image src={i18next.language == 'en' ? Image2_en : Image2_es} alt={t('fourthStep')} />
        <Subtitle name="Soluciones duraderas" color="#009BF9" />
        <Image src={i18next.language == 'en' ? Image1_en : Image1_es} alt="Soluciones duraderas" />
      </div>
    </div>
  );
}

export default LazySection(WaitingTimeProcess);
