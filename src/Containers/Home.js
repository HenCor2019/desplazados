import React, { useState } from 'react';
import house1 from '../images/Home/House1.png';
import house2 from '../images/Home/House2.png';
import house3 from '../images/Home/House3.png';
import house4 from '../images/Home/House4.png';
import house1Text from '../images/Home/House1Text.png';
import house2Text from '../images/Home/House2Text.png';
import house3Text from '../images/Home/House3Text.png';
import house4Text from '../images/Home/House4Text.png';
import firstLine from '../images/Home/FirstLine.png';
import secondLine from '../images/Home/SecondLine.png';
import topPaper from '../images/Home/TopPaper.png';
import Footer from '../Components/Home/Footer';

function Home() {
  const [isReasonsShown, setIsReasonsShown] = useState(false);
  const [isWaitingTimeShown, setIsWaitingTimeShown] = useState(false);
  const [isDreamsShown, setIsDreamsShown] = useState(false);
  const [isHelpShown, setIsHelpShown] = useState(false);

  const [reasonsGrayscale, setReasonsGrayscale] = useState("");
  const [waitingTimeGrayscale, setWaitingTimeGrayscale] = useState("");
  const [dreamsGrayscale, setDreamsGrayscale] = useState("");
  const [helpGrayscale, setHelpGrayscale] = useState("");

  function ShowReasons() {
    setIsReasonsShown(true);
    setWaitingTimeGrayscale("grayscale(100%)");
    setDreamsGrayscale("grayscale(100%)");
    setHelpGrayscale("grayscale(100%)");
  }

  function DontShowReasons() {
    setIsReasonsShown(false);
    setWaitingTimeGrayscale("grayscale(0%)");
    setDreamsGrayscale("grayscale(0%)");
    setHelpGrayscale("grayscale(0%)");
  }

  function ShowWaitingTime() {
    setIsWaitingTimeShown(true);
    setReasonsGrayscale("grayscale(100%)");
    setDreamsGrayscale("grayscale(100%)");
    setHelpGrayscale("grayscale(100%)");
  }

  function DontShowWaitingTime() {
    setIsWaitingTimeShown(false);
    setReasonsGrayscale("grayscale(0%)");
    setDreamsGrayscale("grayscale(0%)");
    setHelpGrayscale("grayscale(0%)");
  }

  function ShowDreams() {
    setIsDreamsShown(true);
    setReasonsGrayscale("grayscale(100%)");
    setWaitingTimeGrayscale("grayscale(100%)");
    setHelpGrayscale("grayscale(100%)");
  }

  function DontShowDreams() {
    setIsDreamsShown(false);
    setReasonsGrayscale("grayscale(0%)");
    setWaitingTimeGrayscale("grayscale(0%)");
    setHelpGrayscale("grayscale(0%)");
  }

  function ShowHelp() {
    setIsHelpShown(true);
    setReasonsGrayscale("grayscale(100%)");
    setWaitingTimeGrayscale("grayscale(100%)");
    setDreamsGrayscale("grayscale(100%)");
  }
  function DontShowHelp() {
    setIsHelpShown(false);
    setReasonsGrayscale("grayscale(0%)");
    setWaitingTimeGrayscale("grayscale(0%)");
    setDreamsGrayscale("grayscale(0%)");
  }

  return (
    <div className="bg-background bg-cover bg-center">
      <img
        src={topPaper}
        alt="Top paper"
        className="absolute -top-5 left-0 z-20 h-15/1 sm-h:display 2xl-1:hidden"
        loading="lazy"
      />
      <main className="h-87/100w">
        <section className="absolute top-4 right-4 w-5/12 h-1/6 z-30 d overflow-y-auto text-sm font-bold font-sans text-center">
          {isReasonsShown && (
            <p>
              “Si tú le dices algo a tus papás, yo te voy a matar, te lo juro que te mato”, caso Pérez.
            </p>
          )}
          {isWaitingTimeShown && (
            <p>
              “Para mí y para mi niña ha sido duro el hecho de que las navidades, los cumpleaños,
              las fechas especiales, es siempre sólo ella y yo y aunque él está ahí, por la
              tecnología, por una videollamada o algo, no es lo mismo”, Caso Hernández.
            </p>
          )}
          {isDreamsShown && (
            <p>
              “Quiero tener mi trabajo, vivir en paz y crecer a mis hijas. Tengo que acceder a irme
              no me queda de otra”, caso Marquina.
            </p>
          )}
          {isHelpShown && (
            <p>
              “En la televisión salen mucho diciendo tanto la policía, los fiscales y el señor presidente que los homicidios han bajado, pero en realidad no dicen lo que está pasando en el país, todo el sufrimiento de las familias. Nosotros éramos 6, ahora somos 5”, caso Ardón.
            </p>
          )}
        </section>
        <section className="h-full flex flex-wrap items-end justify-center overflow-y-auto absolutes">
          <div className="h-72 w-160 z-10 flex absolute items-center justify-center relative lg-1:items-end">
            <img
              src={house1}
              alt="House1"
              className="w-2/6 animate-flip"
              style={{ filter: reasonsGrayscale }}
              onMouseEnter={ShowReasons}
              onMouseLeave={DontShowReasons}
              loading="lazy"
            />
            {isReasonsShown && (
              <img
                src={house1Text}
                alt="Causes"
                className="w-3/6 absolute right-0 left-0 bottom-0 top-0 m-auto lg-1:bottom-8 lg-1:top-auto"
                onMouseEnter={ShowReasons}
                onMouseLeave={DontShowReasons}
                loading="lazy"
              />
            )}
          </div>
          <div className="h-72 w-160 z-10 flex items-center justify-center lg-1:items-end lg-1:justify-start 2xl-1:justify-center relative">
            <img
              src={house2}
              alt="House2"
              className="w-2/6 animate-flip"
              style={{ filter: waitingTimeGrayscale }}
              onMouseEnter={ShowWaitingTime}
              onMouseLeave={DontShowWaitingTime}
              loading="lazy"
            />
            {isWaitingTimeShown && (
              <img
                src={house2Text}
                alt="Waiting time"
                className="w-3/6 absolute right-0 left-0 bottom-0 top-0 m-auto lg-1:-left-12 lg-1:bottom-8 lg-1:right-auto lg-1:top-auto 2xl-1:right-0 2xl-1:left-0"
                onMouseEnter={ShowWaitingTime}
                onMouseLeave={DontShowWaitingTime}
                loading="lazy"
              />
            )}
          </div>
          <div className="h-72 w-160 z-10 flex items-center justify-center lg-1:items-end relative">
            <img
              src={house3}
              alt="House3"
              className="w-3/6 lg-1:w-70/100 2xl-1:2/6 animate-flip"
              style={{ filter: dreamsGrayscale }}
              onMouseEnter={ShowDreams}
              onMouseLeave={DontShowDreams}
              loading="lazy"
            />
            {isDreamsShown && (
              <img
                src={house3Text}
                alt="Dreams"
                className="w-4/6 absolute right-0 left-0 bottom-0 top-0 m-auto lg-1:bottom-8 lg-1:top-auto"
                onMouseEnter={ShowDreams}
                onMouseLeave={DontShowDreams}
                loading="lazy"
              />
            )}
          </div>
          <div className="h-72 w-160 z-10 flex items-center justify-center lg-1:items-end relative">
            <img
              src={house4}
              alt="House4"
              className="w-3/6 lg-1:w-70/100 2xl-1:2/6 animate-flip"
              style={{ filter: helpGrayscale }}
              onMouseEnter={ShowHelp}
              onMouseLeave={DontShowHelp}
              loading="lazy"
            />
            {isHelpShown && (
              <img
                src={house4Text}
                alt="Help"
                className="w-4/6 absolute right-0 left-0 bottom-0 top-0 m-auto lg-1:bottom-16 lg-1:top-auto"
                onMouseEnter={ShowHelp}
                onMouseLeave={DontShowHelp}
                loading="lazy"
              />
            )}
          </div>
          <div className="absolute hidden top-40/100 right-20/100 left-15/100 lg-1:block 2xl-1:hidden">
            <img src={firstLine} alt="First Line" loading="lazy" />
          </div>
          <div className="absolute hidden bottom-20/100  lg-1:block lg-1:block 2xl-1:hidden">
            <img src={secondLine} alt="Second Line" loading="lazy" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
