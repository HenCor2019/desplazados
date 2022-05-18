import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { LazySection } from 'shared/components/LazySection/LazySection';
import StatisticsInfo from './StatisticsInfo';

import title_es from '../../assets/images/statistics/es/statistics-title_es.png';
import timeline1_es from '../../assets/images/statistics/es/timeline-1_es.png';
import timeline2_es from '../../assets/images/statistics/es/timeline-2_es.png';
import chart1_es from '../../assets/images/statistics/es/chart-1_es.png';
import chart2_es from '../../assets/images/statistics/es/chart-2_es.png';
import chart3_es from '../../assets/images/statistics/es/chart-3_es.png';

import title_en from '../../assets/images/statistics/en/statistics-title_en.png';
import timeline1_en from '../../assets/images/statistics/en/timeline-1_en.png';
import timeline2_en from '../../assets/images/statistics/en/timeline-2_en.png';
import chart1_en from '../../assets/images/statistics/en/chart-1_en.png';
import chart2_en from '../../assets/images/statistics/en/chart-2_en.png';
import chart3_en from '../../assets/images/statistics/en/chart-3_en.png';
import Footer from 'home/components/Footer';

function Statistics() {
  const [t] = useTranslation('supportStatistics');

  return (
    <div>
      <main className="p-8 md:p-10">
        <img
          src={i18next.language === 'en' ? title_en : title_es}
          className="w-72 block mb-12 xl-2:w-2/6"
          alt="Número que son personas"
        />
        <StatisticsInfo
          sectionClasses="mb-12 md:mb-8 flex flex-col"
          imgSrc={i18next.language === 'en' ? timeline1_en : timeline1_es}
          imgAlt="Datos generales sobre El Salvador"
          divClasses="w-full bg-cover bg-no-repeat p-8 -mt-1.5 lg:self-end lg:w-6/12 lg:transform lg:-translate-y-10 xl-2:-translate-y-16"
          description={t('statisticsNumberPeople')}
        />
        <StatisticsInfo
          sectionClasses="mb-12 lg:mb-8"
          imgSrc={i18next.language === 'en' ? timeline2_en : timeline2_es}
          imgAlt="Estimación de personas adultas desplazadas por violencia en El Salvador"
          divClasses="w-full bg-cover bg-no-repeat p-8 -mt-2.5 z-10 lg:w-6/12 lg:transform lg:-translate-y-10 xl-2:-translate-y-20 m-auto"
          description={t('statisticsAdultsStimation')}
        />
        <StatisticsInfo
          sectionClasses="mb-12 lg:mb-16 relative"
          imgSrc={i18next.language === 'en' ? chart1_en : chart1_es}
          imgAlt="Causas del desplazamiento forzado"
          divClasses="w-full h-auto bg-cover bg-no-repeat p-8 -mt-2 lg:w-6/12 lg:absolute top-14 right-0 xl:transform xl:translate-y-24 xl-2:transform xl-2:translate-y-80"
          description={t('statisticsCauses')}
        />
        <StatisticsInfo
          sectionClasses="mb-12 lg:mb-8"
          imgSrc={i18next.language === 'en' ? chart2_en : chart2_es}
          imgAlt="Agentes persecutores que provocan el desplazamiento"
          divClasses="w-full bg-cover bg-no-repeat p-8 -mt-2 lg:w-6/12 lg:transform lg:-translate-y-10 xl-2:-translate-y-20 m-auto"
          description={t('statisticsPersecutingAgents')}
        />
        <StatisticsInfo
          sectionClasses="mb-12 lg:mb-8 relative"
          imgSrc={i18next.language === 'en' ? chart3_en : chart3_es}
          imgAlt="Servicios brindados a víctimas de desplazamiento por organizaciones de la MCDF"
          divClasses="w-full bg-cover bg-no-repeat p-8 -mt-2 lg:w-6/12 lg:absolute top-20 right-0 xl:transform xl:translate-y-20 xl-2:transform xl-2:translate-y-64"
          description={t('statisticsServices')}
        />
      </main>
      <Footer translateButtons={false} />
    </div>
  );
}

export default LazySection(Statistics);
