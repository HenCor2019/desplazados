import React, { useState, useEffect } from "react";

import Tab from "../../Components/WaitingTime/Process/tab";
import Subtitle from "../../Components/WaitingTime/Process/subtitle";

import Image1 from "../../assets/images/WaitingTime/infographic/1.png";
import Image2 from "../../assets/images/WaitingTime/infographic/2.png";
import Image3 from "../../assets/images/WaitingTime/infographic/3.png";
import Image4 from "../../assets/images/WaitingTime/infographic/4.png";
import Image5 from "../../assets/images/WaitingTime/infographic/5.png";

import { LazySection } from "../../HOC/LazySection/LazySection";

function WaitingTimeProcess() {
  const [selectedTab, setSelectedTab] = useState(Image1);

  function onClickHandler(currentImage) {
    setSelectedTab(currentImage);
  }

  return (
    <div className='flex justify-center items-center flex-rigid'>
      <div className='flex flex-col justify-center items-center w-10/12 sm:w-7/12 pb-4'>
        <h1 style={{color: '#951b3c8a'}} className="font-sans text-lg sm:text-2xl font-extralight text-center p-2">Procesos que siguen las familias que viven desplazamiento forzado</h1>
        <ul className='xl:grid grid-cols-5 w-full hidden'>
          <Tab name='La familia de Andrés' color='#F76856' customizeStyle='rounded-tl-lg' src={Image5} onClick={onClickHandler} />
          <Tab name='Búsqueda de ayuda' color='#3722FF' src={Image4}  onClick={onClickHandler}/>
          <Tab name='Seguimiento' color='#2D0775' src={Image3}  onClick={onClickHandler}/>
          <Tab name='Acompañamiento' color='#FF881F' src={Image2}  onClick={onClickHandler}/>
          <Tab name='Soluciones duraderas' customizeStyle='rounded-tr-lg' color='#009BF9' src={Image1}  onClick={onClickHandler}/>
        </ul>
        <div style={{ backgroundColor: '#009BF9' }} className='w-full hidden xl:block rounded-b-lg'>
          <img src={selectedTab} className="w-full" alt='image'></img>
        </div>
        <Subtitle name='La familia de Andrés' color='#F76856'/>
        <div className='w-full xl:hidden'>
          <img src={Image1} alt='La familia de Andrés'></img>
        </div>
        <Subtitle name='Búsqueda de ayuda' color='#3722FF' />
        <div className='w-full xl:hidden'>
          <img src={Image1} alt='Búsqueda de ayuda'></img>
        </div>
        <Subtitle name='Seguimiento' color='#2D0775'/>
        <div className='w-full xl:hidden'>
          <img src={Image1} alt='Seguimiento'></img>
        </div>
        <Subtitle name='Acompañamiento' color='#FF881F'/>
        <div className='w-full xl:hidden'>
          <img src={Image1} alt='Acompañamiento'></img>
        </div>
        <Subtitle name='Soluciones duraderas' color='#009BF9'/>
        <div className='w-full xl:hidden'>
          <img src={Image1} alt='Soluciones duraderas'></img>
        </div>
      </div>
    </div>
  );
}

export default WaitingTimeProcess;