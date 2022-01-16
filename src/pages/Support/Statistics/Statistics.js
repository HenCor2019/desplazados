import StatisticsInfo from './StatisticsInfo'
import Title from '../../../assets/images/support/Statistics/statistics-title.png'
import Timeline1 from '../../../assets/images/support/Statistics/timeline-1.png'
import Timeline2 from '../../../assets/images/support/Statistics/timeline-2.png'
import Chart1 from '../../../assets/images/support/Statistics/chart-1.png'
import Chart2 from '../../../assets/images/support/Statistics/chart-2.png'
import Chart3 from '../../../assets/images/support/Statistics/chart-3.png'
import { LazySection } from '../../../HOC/LazySection/LazySection';

function Statistics() {
  return (
    <main className="p-8 md:p-10">
      <img
        src={Title}
        className="w-72 block mb-12 xl-2:w-2/6"
        alt="Número que son personas"
      />
      <StatisticsInfo
        sectionClasses="mb-12 md:mb-8 flex flex-col"
        imgSrc={Timeline1}
        imgAlt="Datos generales sobre El Salvador"
        divClasses="w-full bg-cover bg-no-repeat p-8 -mt-1.5 lg:self-end lg:w-6/12 lg:transform lg:-translate-y-10 xl-2:-translate-y-16"
        description="La Agencia de la ONU para los Refugiados, ACNUR, ofrece anualmente el estado del fenómeno de la migración, refugio y desplazamiento forzado. Hasta octubre de 2020, se estimaban 71 mil 500 personas desplazadas a nivel interno en El Salvador durante los últimos 10 años. 41 mil 850 personas salvadoreñas con el estatus de refugiados alrededor del mundo. 136 mil 292 se encuentran esperando una solución a sus peticiones de asilo. ACNUR, junto a sus socios, han asistido a más de 13 mil personas desplazadas. Sin embargo, a pesar de la pandemia, 7 mil 783 personas fueron retornadas, en su mayoría procedentes de Estados Unidos."
      />
      <StatisticsInfo
        sectionClasses="mb-12 lg:mb-8"
        imgSrc={Timeline2}
        imgAlt="Estimación de personas adultas desplazadas por violencia en El Salvador"
        divClasses="w-full bg-cover bg-no-repeat p-8 -mt-2.5 z-10 lg:w-6/12 lg:transform lg:-translate-y-10 xl-2:-translate-y-20 m-auto"
        description="El Servicio Social Pasionista, SSPAS, en su informe “Desplazamiento forzado interno por violencia y las respuestas ante el fenómeno en El Salvador“ (2021) presenta la tendencia del a partir de las proyecciones de población y estimación con base a encuestas realizadas por el IUDOP. Partiendo del 2014 y 2015, donde el estimado de personas adultas desplazadas es menor a 200 mil, entre 2016 y 2018, sobrepasan esta cifra, siendo 2018 el año con mayor número, casi un cuarto de millón. En 2019 hay una considerable disminución de más del 50%, pero es notable el aumento de 10 mil personas en 2020, a pesar del confinamiento por la pandemia COVID-19."
      />
      <StatisticsInfo
        sectionClasses="mb-12 lg:mb-16 relative"
        imgSrc={Chart1}
        imgAlt="Causas del desplazamiento forzado"
        divClasses="w-full h-auto bg-cover bg-no-repeat p-8 -mt-2 lg:w-6/12 lg:absolute top-14 right-0 xl:transform xl:translate-y-24 xl-2:transform xl-2:translate-y-80"
        description="Según los datos de la Mesa de la Sociedad Civil contra el Desplazamiento Forzado en su informe sobre el fenómeno del desplazamiento por violencia que comprende los años 2017-2019 la mayor causa del problema se encuentra en las amenazas directas (539 casos), agresión física (105), homicidio de un familiar (104) y desaparición de un familiar (102). El resto de causas como el secuestro, extorsión, la violencia sexual, intento de homicidio, entre otras, se encuentran con una frecuancia menor a 100 casos atendidos."
      />
      <StatisticsInfo
        sectionClasses="mb-12 lg:mb-8"
        imgSrc={Chart2}
        imgAlt="Agentes persecutores que provocan el desplazamiento"
        divClasses="w-full bg-cover bg-no-repeat p-8 -mt-2 lg:w-6/12 lg:transform lg:-translate-y-10 xl-2:-translate-y-20 m-auto"
        description="Según los datos de la Mesa de la Sociedad Civil contra el Desplazamiento Forzado en su informe sobre el fenómeno del desplazamiento por violencia que comprende los años 2017-2019 los agentes persecutores, basándose en los casos atendidos por las instituciones que forman la Mesa, cerca del 80% son las pandillas, el 9.5% agentes del Estado (PNC y FAES) y el resto se divide enfre familiares, personas desconocidas y redes de trata de personas."
      />
      <StatisticsInfo
        sectionClasses="mb-12 lg:mb-8 relative"
        imgSrc={Chart3}
        imgAlt="Servicios brindados a víctimas de desplazamiento por organizaciones de la MCDF"
        divClasses="w-full bg-cover bg-no-repeat p-8 -mt-2 lg:w-6/12 lg:absolute top-20 right-0 xl:transform xl:translate-y-20 xl-2:transform xl-2:translate-y-64"
        description="Según los datos de la Mesa de la Sociedad Civil contra el Desplazamiento Forzado en su informe sobre el fenómeno del desplazamiento por violencia que comprende los años 2017-2019, las instituciones que forman parte de la Mesa han brindado atención legal a 547 casos, psicológica a 802, médica a 228, apoyo económico a 249, humanitario a 726 y capacitación y empoderamiento a 74. Los tipos de apoyo/acompañamiento que más buscan las familias que sufren desplazamiento son el psicológico y humanitario."
      />
    </main>
  )
}

export default LazySection(Statistics)

