import React, { useState, useEffect } from "react";

import Tab from "../../Components/WaitingTime/Process/tab";
import Subtitle from "../../Components/WaitingTime/Process/subtitle";
import Image from "../../Components/WaitingTime/Process/image";

import Image1 from "../../assets/images/WaitingTime/infographic/1.png";
import Image2 from "../../assets/images/WaitingTime/infographic/2.png";
import Image3 from "../../assets/images/WaitingTime/infographic/3.png";
import Image4 from "../../assets/images/WaitingTime/infographic/4.png";
import Image5 from "../../assets/images/WaitingTime/infographic/5.png";
import Arrow from "../../assets/images/WaitingTime/infographic/arrow.png";

import { LazySection } from "../../HOC/LazySection/LazySection";

function WaitingTimeProcess() {
  const [selectedTab, setSelectedTab] = useState(Image1);

  function onClickHandler(currentImage) {
    setSelectedTab(currentImage);
  }

  return (
    <div className='flex justify-center items-center flex-rigid'>
      <div className='flex flex-col justify-center items-center w-10/12 sm:w-7/12 pb-4'>
        <h1
          style={{ color: "#951b3c8a" }}
          className='font-sans text-lg sm:text-2xl font-extralight text-center p-2'>
          Procesos que siguen las familias que viven desplazamiento forzado
        </h1>
        <Subtitle name='La familia de Andrés' color='#F76856' />
        <Image src={Image5} alt='La familia de Andrés' />
        <Subtitle name='Búsqueda de ayuda' color='#3722FF' />
        <Image src={Image4} alt='Búsqueda de ayuda' />
        <Subtitle name='Seguimiento' color='#2D0775' />
        <Image src={Image3} alt='Seguimiento' />
        <Subtitle name='Acompañamiento' color='#FF881F' />
        <Image src={Image2} alt='Acompañamiento' />
        <Subtitle name='Soluciones duraderas' color='#009BF9' />
        <Image src={Image1} alt='Soluciones duraderas' />
      </div>
    </div>
  );
}

export default LazySection(WaitingTimeProcess);
