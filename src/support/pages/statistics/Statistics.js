import { useTranslation } from 'react-i18next';
import StatisticsInfo from './StatisticsInfo'
import Title from '../../assets/images/statistics/statistics-title.png'
import Timeline1 from '../../assets/images/statistics/timeline-1.png'
import Timeline2 from '../../assets/images/statistics/timeline-2.png'
import Chart1 from '../../assets/images/statistics/chart-1.png'
import Chart2 from '../../assets/images/statistics/chart-2.png'
import Chart3 from '../../assets/images/statistics/chart-3.png'
import { LazySection } from 'shared/components/LazySection/LazySection';

function Statistics() {
  const [t] = useTranslation('supportStatistics');

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
        description={t('statisticsNumberPeople')}
      />
      <StatisticsInfo
        sectionClasses="mb-12 lg:mb-8"
        imgSrc={Timeline2}
        imgAlt="Estimación de personas adultas desplazadas por violencia en El Salvador"
        divClasses="w-full bg-cover bg-no-repeat p-8 -mt-2.5 z-10 lg:w-6/12 lg:transform lg:-translate-y-10 xl-2:-translate-y-20 m-auto"
        description={t('statisticsAdultsStimation')}
      />
      <StatisticsInfo
        sectionClasses="mb-12 lg:mb-16 relative"
        imgSrc={Chart1}
        imgAlt="Causas del desplazamiento forzado"
        divClasses="w-full h-auto bg-cover bg-no-repeat p-8 -mt-2 lg:w-6/12 lg:absolute top-14 right-0 xl:transform xl:translate-y-24 xl-2:transform xl-2:translate-y-80"
        description={t('statisticsCauses')}
      />
      <StatisticsInfo
        sectionClasses="mb-12 lg:mb-8"
        imgSrc={Chart2}
        imgAlt="Agentes persecutores que provocan el desplazamiento"
        divClasses="w-full bg-cover bg-no-repeat p-8 -mt-2 lg:w-6/12 lg:transform lg:-translate-y-10 xl-2:-translate-y-20 m-auto"
        description={t('statisticsPersecutingAgents')}
      />
      <StatisticsInfo
        sectionClasses="mb-12 lg:mb-8 relative"
        imgSrc={Chart3}
        imgAlt="Servicios brindados a víctimas de desplazamiento por organizaciones de la MCDF"
        divClasses="w-full bg-cover bg-no-repeat p-8 -mt-2 lg:w-6/12 lg:absolute top-20 right-0 xl:transform xl:translate-y-20 xl-2:transform xl-2:translate-y-64"
        description={t('statisticsServices')}
      />
    </main>
  )
}

export default LazySection(Statistics)

