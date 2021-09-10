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

function WaitingTime() {
  const [isImage1Hover, setIsImage1Hover] = useState(false)
  const [isImage2Hover, setIsImage2Hover] = useState(false)
  const [isImage3Hover, setIsImage3Hover] = useState(false)
  const [isImage4Hover, setIsImage4Hover] = useState(false)
  const [isImage5Hover, setIsImage5Hover] = useState(false)

  return (
    <main className='bg-white-500 grid grid-cols-1 grid-flow-row gap-4 sm:grid-cols-2 sm:p-4 lg:grid-cols-3 lg:grid-cols-3'>
      <Image
        img={image1}
        alt={"Imagen 1"}
        position={"justify-center items-center order-5 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2 "}
        onMouseEnter={() => setIsImage1Hover(true)}
        onMouseLeave={() => setIsImage1Hover(false)}
        hover={isImage1Hover}
      />
      <Text
        text={
          "El hijo de Lucía alfabetizaba en una zona de alto riesgo. Tras desaparecer, lo buscaron sin descanso. Acudieron a organizaciones en busca de apoyo. No fue fácil. Las amenazas nunca cesaron."
        }
        position={"justify-center items-center order-5"}
        visibility={"lg:hidden"}
      />
      <Image
        img={image2}
        alt={"Imagen 2"}
        position={"justify-center items-center order-5 lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2"}
        onMouseEnter={() => setIsImage2Hover(true)}
        onMouseLeave={() => setIsImage2Hover(false)}
        hover={isImage2Hover}
      />
      <Text
        text={
          "El esposo de Gladis fue asesinado por narcotraficantes. Luego de enterrarlo, huyó junto a sus hijas a México. En ese país no lograron esperar papeles debido a las condiciones inhumanas a las que fueron sometidas. Retornaron al país."
        }
        position={"justify-center items-center order-5"}
        visibility={"lg:hidden"}
      />
      <Image
        img={image3}
        alt={"Imagen 3"}
        position={"justify-center items-center order-5 lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3"}
        onMouseEnter={() => setIsImage3Hover(true)}
        onMouseLeave={() => setIsImage3Hover(false)}
        hover={isImage3Hover}
      />
      <Text
        text={
          "La hija de Joaquín fue víctima de violación. Al darse cuenta, como padre, denunció al hechor. Este fue capturado y juzgado. La familia del agresor los comenzó a amenazar. ¿Cómo espera una familia del campo una salida mientras no puede ni trabajar la tierra?"
        }
        position={"justify-center items-center order-5"}
        visibility={"lg:hidden"}
      />
      <Image
        img={image4}
        alt={"Imagen 4"}
        position={"justify-center items-center order-5 lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3"}
        onMouseEnter={() => setIsImage4Hover(true)}
        onMouseLeave={() => setIsImage4Hover(false)}
        hover={isImage4Hover}
      />
      <Text
        text={
          "Marcos es un hombre que ha trabajado desde los 14 años. Fue testigo de un crimen y colaboró con la justicia. Las amenazas no tardaron en aparecer. Desde el día que la PNC lo sacó de casa vive, junto a su familia, solo con la esperanza que un día podrá salir del país."
        }
        position={"justify-center items-center order-5"}
        visibility={"lg:hidden"}
      />
      <Image
        img={image5}
        alt={"Imagen 5"}
        position={"justify-center items-center order-5 lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4"}
        onMouseEnter={() => setIsImage5Hover(true)}
        onMouseLeave={() => setIsImage5Hover(false)}
        hover={isImage5Hover}
      />
      <Text
        text={
          "Maritza y su esposo comenzaron el sueño de construir una vida juntos. Iniciaron con un negocio. Los pandilleros exigieron la “renta”, hasta asesinar a un empleado. Él tuvo que migrar. Ahora, Maritza y la hija de ambos, esperan una oportunidad para recuperar todo el tiempo perdido por la separación."
        }
        position={"justify-center items-center order-5"}
        visibility={"lg:hidden"}
      />
      <ImageWithText
        img={theme}
        alt={"Theme"}
        position={"justify-center items-center order-0 lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2"}
        text={"Mientras se encuentra una solución"}
      />
      <Text
        text={
          "La violencia, la inseguridad y el crimen organizado son algunas de las causas del desplazamiento forzado. Es un amplio porcentaje de personas quienes reportan ser víctimas de intimidaciones y amenazas. Este es un fenómeno que perjudica a los niños, las niñas, los adolescentes y adultos. Es una realidad poco conocida porque no se sabe su origen ¿Quieres conocer algunos testimonios que explican las raíces de esto?"
        }
        position={"justify-center items-center order-1 text-justify lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-4"}
      />
    </main>
  );
}

export default WaitingTime;
