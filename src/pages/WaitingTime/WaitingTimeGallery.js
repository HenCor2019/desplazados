import React, { useState } from "react";
import Image from "../../Components/WaitingTime/Gallery/Image";
import Text from "../../Components/WaitingTime/Gallery/Text";
import Title from "../../assets/images/WaitingTime/gallery/Title.png"
import Image1 from "../../assets/images/WaitingTime/gallery/Image1.png";
import Image2 from "../../assets/images/WaitingTime/gallery/Image2.png";
import Image3 from "../../assets/images/WaitingTime/gallery/Image3.png";
import Image4 from "../../assets/images/WaitingTime/gallery/Image4.png";
import Image5 from "../../assets/images/WaitingTime/gallery/Image5.png";
import Image6 from "../../assets/images/WaitingTime/gallery/Image6.png";
import Image7 from "../../assets/images/WaitingTime/gallery/Image7.png";
import Image8 from "../../assets/images/WaitingTime/gallery/Image8.png";
import Image9 from "../../assets/images/WaitingTime/gallery/Image9.png";
import Image10 from "../../assets/images/WaitingTime/gallery/Image10.png";

function WaitingTimeGallery() {
  return (
    <div className=' grid grid-cols-1 grid-flow-row sm:grid-cols-2 lg:grid-cols-5 lg:grid-rows-4 gap-6 lg:gap-0'>
      <div className={"px-4 flex justify-center items-center relative lg:col-start-1 lg:col-end-4 lg:row-start-1 lg:row-end-2"}>
          <img className={"w-7/12"} src={Title} alt="La cotidianidad: la casa de espera y el albergue" />
      </div>
      {galleryImage.map((galleryImage) => (
        <>
          <Image
            img={galleryImage.src}
            alt={galleryImage.title}
            position={galleryImage.imgPosition}
          />
          <Text 
            title={galleryImage.title}
            description={galleryImage.description}
            author={galleryImage.author}
          />
        </>
      ))}
      <div className="bg-time order-5 sm:order-4 sm:bg-transparent lg:bg-white lg:col-start-4 lg:col-end-6 lg:row-start-4 lg:row-end-5">
          <p className="text-sm text-justify text-white p-6 sm:text-black">
            Al salir de casa, obligados por la violencia, las familias no pueden
            llevar consigo muchas pertenencias. A veces se reubican por sus propios
            medios, a veces es necesario un albergue. ¿Cómo es vivir, desde los ojos
            de una niña o un niño, esta realidad?
          </p>
      </div>
    </div>
  );
}

const galleryImage = [
  {
    title: "Pasos de colores",
    description:
      "“Estos son mis zapatos que uso todos los días para jugar en mi casa”.",
    imgPosition: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
    author: "Dani, 9 años de edad",
    src: Image1,
    index: 0,
  },
  {
    title: "Sopa rica.",
    description:
      "“Esta es la olla donde mi mami nos hace sopa de pollo… le queda bien rica”.",
    author: "José, 14 años de edad",
    imgPosition: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3",
    src: Image2,
    index: 1,
  },
  {
    title: "Desayuno con huevo.",
    description:
      "“Mi mamá me hace pan con huevo para desayunar, le pone salsa, huevo, queso y pan”.",
    author: "Flor, 10 años de edad",
    imgPosition: "lg:col-start-4 lg:col-end-5 lg:row-start-2 lg:row-end-3",
    src: Image3,
    index: 2,
  },
  {
    title: "Vidas nuevas.",
    description:
      "“Con mi mamá nos pusimos a sembrar semillas de una papaya que había salido dulce y nació”.",
    author: "Alberto, 15 años de edad",
    imgPosition: "lg:col-start-5 lg:col-end-6 lg:row-start-2 lg:row-end-3",
    src: Image4,
    index: 3,
  },
  {
    title: "Geometría del hogar.",
    description:
      "“Esta es la puerta de la casa donde vivimos, casi siempre la mantenemos cerrada”.",
    author: "Carlos, 13 años de edad",
    imgPosition: "lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4",
    src: Image5,
    index: 4,
  },
  {
    title: "Limites marcados.",
    description:
      "“En el cuarto donde estamos solo cabe un camarote y el ropero, todos dormimos en el camarote, mi mamá, mi papá, mi hermana y yo, casi no hay espacio”.",
    author: "Carlos, 13 años de edad",
    imgPosition: "lg:col-start-3 lg:col-end-4 lg:row-start-3 lg:row-end-4",
    src: Image6,
    index: 5,
  },
  {
    title: "Perro Balu.",
    description:
      "“Este me lo regaló mi abuelita, tiene muchos colores porque está feliz”.",
    author: "Valeria, 12 años de edad",
    imgPosition: "lg:col-start-4 lg:col-end-5 lg:row-start-3 lg:row-end-4",
    src: Image7,
    index: 6,
  },
  {
    title: "Kati Cat",
    description:
      "“Este me lo regaló mi abuelita, tiene muchos colores porque está feliz”.",
    author: "Karla, 9 años de edad",
    imgPosition: "lg:col-start-5 lg:col-end-6 lg:row-start-3 lg:row-end-4",
    src: Image8,
    index: 7,
  },
  {
    title: "Disciplina Bucal.",
    description:
      "“Mi papá siempre nos dice que nos lavemos los dientes en la noche”.",
    author: "Jonathan, 11 años de edad",
    imgPosition: "lg:col-start-2 lg:col-end-3 lg:row-start-4 lg:row-end-5",
    src: Image9,
    index: 8,
  },
  {
    title: "Fruta congelada.",
    description:
      "“A veces en las tardes sacamos la fruta que tenemos congelada en la refri y nos la comemos así, nos gusta la fruta congelada”.",
    author: "Camila, 13 años de edad",
    imgPosition: "lg:col-start-3 lg:col-end-4 lg:row-start-4 lg:row-end-5",
    src: Image10,
    index: 9,
  },
];

export default WaitingTimeGallery;
