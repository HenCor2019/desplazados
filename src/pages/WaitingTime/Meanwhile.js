import React, { useState } from "react";
import Text from "../../Components/WaitingTime/Meanwhile/Text";
import Image from "../../Components/WaitingTime/Meanwhile/Image";
import ImageWithText from "../../Components/WaitingTime/Meanwhile/ImageWithText";
import image1 from "../../assets/images/Meanwhile/Image1.png";
import image2 from "../../assets/images/Meanwhile/Image2.png";
import image3 from "../../assets/images/Meanwhile/Image3.png";
import image4 from "../../assets/images/Meanwhile/Image4.png";
import image5 from "../../assets/images/Meanwhile/Image5.png";
import theme from "../../assets/images/Meanwhile/Theme.png";
import Modal from "../../Components/Modal/Modal";

import {LazySection} from "../../HOC/LazySection/LazySection";

function WaitingTime() {
  const [isActive, setIsActive] = useState(false);
  const [activeVideo, setActiveVideo] = useState(galleryVideos[0]);

  const handleOnClick = (videoInformation) => {
    setIsActive(!isActive);
    if (videoInformation) setActiveVideo(videoInformation);
  };

  return (
    <>
      {isActive && <Modal></Modal>}
      <div className="flex justify-center items-center">
        <main className='bg-white-500 grid grid-cols-1 grid-flow-row gap-4 sm:gap-4 sm:grid-cols-2 sm:p-4 lg:grid-cols-3 lg:grid-cols-3 w-11/12'>
          {galleryVideos.map((galleryVideos) => (
            <>
              <Image
                img={galleryVideos.img}
                alt={galleryVideos.title}
                isActive={isActive}
                position={galleryVideos.imgPosition}
                handleOnClick={handleOnClick}
              />
              <Text
                text={galleryVideos.description}
                position={galleryVideos.textPosition}
                visibility={galleryVideos.textVisibility}
              />
            </>
          ))}
          <ImageWithText
            img={theme}
            alt={"Theme"}
            position={
              "justify-center items-center order-0 lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2"
            }
            text={"Mientras se encuentra una solución"}
          />
          <Text
            text={
              "La violencia, la inseguridad y el crimen organizado son algunas de las causas del desplazamiento forzado. Es un amplio porcentaje de personas quienes reportan ser víctimas de intimidaciones y amenazas. Este es un fenómeno que perjudica a los niños, las niñas, los adolescentes y adultos. Es una realidad poco conocida porque no se sabe su origen ¿Quieres conocer algunos testimonios que explican las raíces de esto?"
            }
            position={
              "justify-center items-top order-1 text-justify lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-4 lg:px-10"
            }
          />
        </main>
      </div>
    </>
  );
}

const galleryVideos = [
  {
    title: "“Los vamos a encontrar”",
    description:
      "El hijo de Lucía alfabetizaba en una zona de alto riesgo. Tras desaparecer, lo buscaron sin descanso. Acudieron a organizaciones en busca de apoyo. No fue fácil. Las amenazas nunca cesaron.",
    video: "https://youtu.be/aL4qJjWPjn8",
    img: image1,
    imgPosition:
      "justify-center items-center order-5 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    textPosition: "justify-center items-center order-5",
    textVisibility: "lg:hidden",
    index: 0,
  },
  {
    title: "“¿Qué estás esperando tanto?”",
    description:
      "El esposo de Gladis fue asesinado por narcotraficantes. Luego de enterrarlo, huyó junto a sus hijas a México. En ese país no lograron esperar papeles debido a las condiciones inhumanas a las que fueron sometidas. Retornaron al país.",
    video: "https://youtu.be/aL4qJjWPjn8",
    img: image2,
    imgPosition:
      "justify-center items-center order-5 lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
    textPosition: "justify-center items-center order-5",
    textVisibility: "lg:hidden",
    index: 1,
  },
  {
    title: "“El sabio ve el mal y se aparta”",
    description:
      "La hija de Joaquín fue víctima de violación. Al darse cuenta, como padre, denunció al hechor. Este fue capturado y juzgado. La familia del agresor los comenzó a amenazar. ¿Cómo espera una familia del campo una salida mientras no puede ni trabajar la tierra?",
    video: "https://youtu.be/aL4qJjWPjn8",
    img: image3,
    imgPosition:
      "justify-center items-center order-5 lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
    textPosition: "justify-center items-center order-5",
    textVisibility: "lg:hidden",
    index: 2,
  },
  {
    title: "“Estamos acá como pollitos...”",
    description:
      "Marcos es un hombre que ha trabajado desde los 14 años. Fue testigo de un crimen y colaboró con la justicia. Las amenazas no tardaron en aparecer. Desde el día que la PNC lo sacó de casa vive, junto a su familia, solo con la esperanza que un día podrá salir del país.",
    video: "https://youtu.be/aL4qJjWPjn8",
    img: image4,
    imgPosition:
      "justify-center items-center order-5 lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3",
    textPosition: "justify-center items-center order-5",
    textVisibility: "lg:hidden",
    index: 3,
  },
  {
    title: "“La vida nos cambio en gran forma”",
    description:
      "Maritza y su esposo comenzaron el sueño de construir una vida juntos. Iniciaron con un negocio. Los pandilleros exigieron la “renta”, hasta asesinar a un empleado. Él tuvo que migrar. Ahora, Maritza y la hija de ambos, esperan una oportunidad para recuperar todo el tiempo perdido por la separación.",
    video: "https://youtu.be/aL4qJjWPjn8",
    img: image5,
    imgPosition:
      "justify-center items-center order-5 lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4 2xl:pt-4",
    textPosition: "justify-center items-center order-5",
    textVisibility: "lg:hidden",
    index: 4,
  },
];

export default LazySection(WaitingTime);