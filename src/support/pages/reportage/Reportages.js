import { useTranslation } from 'react-i18next';
import TitleDeco from '../../assets/images/reportage/purple-paper-min.png';
import Landscape from './sections/landscape/Landscape';
import Portrait from './sections/portrait/Portrait';

import { useConfigContext } from '../../../contexts/ConfigContext';
import Footer from 'home/components/Footer';

function Reportages() {
  const [t] = useTranslation('supportReportage');

  const { isMobile } = useConfigContext();
  const { isTablet } = useConfigContext();
  let reportage = null;

  if (isTablet || isMobile) {
    reportage = <Portrait />;
  } else {
    reportage = <Landscape />;
  }

  return (
    <div>
      <main className="p-0 md:p-4 xl-2:p-8">
        <div className="w-full flex flex-nowrap mb-2 md:mb-4 p-4">
          <p className="font-sans text-title bg-white md:w-11/12 w-full p-4 xl-2:text-5xl">
            {t('reportageTitle')}
          </p>
          <img
            src={TitleDeco}
            className="md:w-20 hidden md:inline-block"
            alt="Los salvadoreños que dejan todo para salvar la vida"
          />
        </div>
        <p className="leading-6 md:pr-8 font-acumin font-bold text-lg text-black-700 p-4">
          {t('reportageIntro')}
        </p>
        {reportage}
      </main>
      <Footer translateButtons={false} />
    </div>
  );
}

// export default LazySection(Reportages);
export default Reportages;
