import React, { useState } from "react";
import House from "../Components/Home/House";
import house1 from "../assets/images/Home/House1.png";
import house2 from "../assets/images/Home/House2.png";
import house3 from "../assets/images/Home/House3.png";
import house4 from "../assets/images/Home/House4.png";
import house1Text from "../assets/images/Home/House1Text.png";
import house2Text from "../assets/images/Home/House2Text.png";
import house3Text from "../assets/images/Home/House3Text.png";
import house4Text from "../assets/images/Home/House4Text.png";
import firstLine from "../assets/images/Home/FirstLine.png";
import secondLine from "../assets/images/Home/SecondLine.png";
import topPaper from "../assets/images/Home/TopPaper.png";
import Footer from "../Components/Home/Footer";

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
    <div className='bg-background bg-cover bg-center relative min-h-screen flex flex-col min-w-0'>
      <div
        style={{ backgroundImage: `url(${topPaper})` }}
        className='w-full sticky z-10 top-0 left-0 bg-cover bg-bottom flex justify-end min-h-20 md:h-28 lg:h-32 xl-2:h-56'>
        <section className='p-1 h-14 text-ultra-xs sm:text-xs xl-2:text-xl font-sans text-center xl-2:w-4/12 w-full md:p-2 xl:w-5/12 text-homeText'>
          {isReasonsShown && (
            <p className='font-sans'>
              “Si tú le dices algo a tus papás, yo te voy a matar, te lo juro
              que te mato”, caso Pérez.
            </p>
          )}
          {isWaitingTimeShown && (
            <p className='font-sans'>
              “Para mí y para mi niña ha sido duro el hecho de que las
              navidades, los cumpleaños, las fechas especiales, es siempre sólo
              ella y yo y aunque él está ahí, por la tecnología, por una
              videollamada o algo, no es lo mismo”, Caso Hernández.
            </p>
          )}
          {isDreamsShown && (
            <p className='font-sans'>
              “Quiero tener mi trabajo, vivir en paz y ver crecer a mis hijas. Tengo que acceder a
              irme no me queda de otra”, caso Marquina.
            </p>
          )}
          {isHelpShown && (
            <p className='font-sans'>
              “En la televisión salen mucho diciendo tanto la policía, los
              fiscales y el señor presidente que los homicidios han bajado, pero
              en realidad no dicen lo que está pasando en el país, todo el
              sufrimiento de las familias. Nosotros éramos 6, ahora somos 5”,
              caso Ardón.
            </p>
          )}
        </section>
      </div>
      <main className='flex md:flex-rigid p-4 sm:p-8 md:p-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-6 md:gap-0 md:gap-x-32 overflow-y-auto w-full p-2'>
          <House
            houseImg={house1}
            alt={"Causes"}
            textImg={house1Text}
            filter={reasonsGrayscale}
            onMouseEnter={ShowReasons}
            onMouseLeave={DontShowReasons}
            isShown={isReasonsShown}
            line={firstLine}
            flexes={"justify-end items-end"}
            pathname='/causas'
          />
          <House
            houseImg={house2}
            alt={"Waiting time"}
            textImg={house2Text}
            filter={waitingTimeGrayscale}
            onMouseEnter={ShowWaitingTime}
            onMouseLeave={DontShowWaitingTime}
            isShown={isWaitingTimeShown}
            line={secondLine}
            flexes={"justify-start items-end"}
            pathname='la-espera'
          />
          <House
            houseImg={house3}
            alt={"Dreams"}
            textImg={house3Text}
            filter={dreamsGrayscale}
            onMouseEnter={ShowDreams}
            onMouseLeave={DontShowDreams}
            isShown={isDreamsShown}
            line={firstLine}
            flexes={"justify-end items-end"}
            pathname='/sueños'
          />
          <House
            houseImg={house4}
            alt={"Help"}
            textImg={house4Text}
            filter={helpGrayscale}
            onMouseEnter={ShowHelp}
            onMouseLeave={DontShowHelp}
            isShown={isHelpShown}
            line={secondLine}
            flexes={"justify-start items-end"}
            pathname='/apoyo'
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
