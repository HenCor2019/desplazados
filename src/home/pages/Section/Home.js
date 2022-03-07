import React, { useState } from 'react';

import styles from './home.module.scss';

import House from 'home/components/House';
import house1 from 'home/assets/images/section/House1.png';
import house2 from 'home/assets/images/section/House2.png';
import house3 from 'home/assets/images/section/House3.png';
import house4 from 'home/assets/images/section/House4.png';
import house1Text_es from 'home/assets/images/section/House1Text_es.png';
import house2Text_es from 'home/assets/images/section/House2Text_es.png';
import house3Text_es from 'home/assets/images/section/House3Text_es.png';
import house4Text_es from 'home/assets/images/section/House4Text_es.png';
import house1Text_en from 'home/assets/images/section/House1Text_en.png';
import house2Text_en from 'home/assets/images/section/House2Text_en.png';
import house3Text_en from 'home/assets/images/section/House3Text_en.png';
import house4Text_en from 'home/assets/images/section/House4Text_en.png';
import firstLine from 'home/assets/images/section/FirstLine.png';
import secondLine from 'home/assets/images/section/SecondLine.png';
import topPaper from 'shared/assets/images/topPaper/TopPaper.png';
import Footer from 'home/components/Footer';

import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

import TranslateButtons from 'shared/components/TranslateButtons/TranslateButtons';

function Home() {
  const [t, i18n] = useTranslation('homePageSectionHome');

  const [isReasonsShown, setIsReasonsShown] = useState(false);
  const [isWaitingTimeShown, setIsWaitingTimeShown] = useState(false);
  const [isDreamsShown, setIsDreamsShown] = useState(false);
  const [isHelpShown, setIsHelpShown] = useState(false);

  const [reasonsGrayscale, setReasonsGrayscale] = useState('');
  const [waitingTimeGrayscale, setWaitingTimeGrayscale] = useState('');
  const [dreamsGrayscale, setDreamsGrayscale] = useState('');
  const [helpGrayscale, setHelpGrayscale] = useState('');

  function ShowReasons() {
    setIsReasonsShown(true);
    setWaitingTimeGrayscale('grayscale(100%)');
    setDreamsGrayscale('grayscale(100%)');
    setHelpGrayscale('grayscale(100%)');
  }

  function DontShowReasons() {
    setIsReasonsShown(false);
    setWaitingTimeGrayscale('grayscale(0%)');
    setDreamsGrayscale('grayscale(0%)');
    setHelpGrayscale('grayscale(0%)');
  }

  function ShowWaitingTime() {
    setIsWaitingTimeShown(true);
    setReasonsGrayscale('grayscale(100%)');
    setDreamsGrayscale('grayscale(100%)');
    setHelpGrayscale('grayscale(100%)');
  }

  function DontShowWaitingTime() {
    setIsWaitingTimeShown(false);
    setReasonsGrayscale('grayscale(0%)');
    setDreamsGrayscale('grayscale(0%)');
    setHelpGrayscale('grayscale(0%)');
  }

  function ShowDreams() {
    setIsDreamsShown(true);
    setReasonsGrayscale('grayscale(100%)');
    setWaitingTimeGrayscale('grayscale(100%)');
    setHelpGrayscale('grayscale(100%)');
  }

  function DontShowDreams() {
    setIsDreamsShown(false);
    setReasonsGrayscale('grayscale(0%)');
    setWaitingTimeGrayscale('grayscale(0%)');
    setHelpGrayscale('grayscale(0%)');
  }

  function ShowHelp() {
    setIsHelpShown(true);
    setReasonsGrayscale('grayscale(100%)');
    setWaitingTimeGrayscale('grayscale(100%)');
    setDreamsGrayscale('grayscale(100%)');
  }
  function DontShowHelp() {
    setIsHelpShown(false);
    setReasonsGrayscale('grayscale(0%)');
    setWaitingTimeGrayscale('grayscale(0%)');
    setDreamsGrayscale('grayscale(0%)');
  }

  return (
    <div className="bg-background bg-cover bg-center relative min-h-screen flex flex-col min-w-0">
      <div
        style={{ backgroundImage: `url(${topPaper})` }}
        className="w-full sticky z-10 top-0 left-0 bg-cover bg-bottom flex justify-end min-h-20 md:h-28 lg:h-32 xl-2:h-56"
      >
        <section className="p-1 h-14 text-ultra-xs sm:text-xs xl-2:text-xl font-sans text-center xl-2:w-4/12 w-full md:p-2 xl:w-5/12 text-homeText">
          {isReasonsShown &&
            <p className="font-sans">
              {t('causes')}
            </p>}
          {isWaitingTimeShown &&
            <p className="font-sans">
              {t('waiting')}
            </p>}
          {isDreamsShown &&
            <p className="font-sans">
              {t('hope')}
            </p>}
          {isHelpShown &&
            <p className="font-sans">
              {t('support')}
            </p>}
        </section>
      </div>
      <main className="flex md:flex-rigid p-4 sm:p-8 md:p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-6 md:gap-0 md:gap-x-32 overflow-y-auto w-full p-2">
          <House
            houseImg={house1}
            alt={'Causes'}
            textImg={i18next.language == 'en' ? house1Text_en : house1Text_es}
            filter={reasonsGrayscale}
            onMouseEnter={ShowReasons}
            onMouseLeave={DontShowReasons}
            isShown={isReasonsShown}
            line={firstLine}
            flexes={'justify-end items-end'}
            pathname="/causas"
          />
          <House
            houseImg={house2}
            alt={'Waiting time'}
            textImg={i18next.language == 'en' ? house2Text_en : house2Text_es}
            filter={waitingTimeGrayscale}
            onMouseEnter={ShowWaitingTime}
            onMouseLeave={DontShowWaitingTime}
            isShown={isWaitingTimeShown}
            line={secondLine}
            flexes={'justify-start items-end'}
            pathname="la-espera"
          />
          <House
            houseImg={house3}
            alt={'Dreams'}
            textImg={i18next.language == 'en' ? house3Text_en : house3Text_es}
            filter={dreamsGrayscale}
            onMouseEnter={ShowDreams}
            onMouseLeave={DontShowDreams}
            isShown={isDreamsShown}
            line={firstLine}
            flexes={'justify-end items-end'}
            pathname="/sueños"
          />
          <House
            houseImg={house4}
            alt={'Help'}
            textImg={i18next.language == 'en' ? house4Text_en : house4Text_es}
            filter={helpGrayscale}
            onMouseEnter={ShowHelp}
            onMouseLeave={DontShowHelp}
            isShown={isHelpShown}
            line={secondLine}
            flexes={'justify-start items-end'}
            pathname="/apoyo"
          />
        </div>
        <div className={styles.Home__TranslateButtons}>
          <TranslateButtons type={'homepage'} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
