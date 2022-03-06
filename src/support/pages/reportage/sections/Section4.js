import SimpleVideoPlayer from 'shared/components/VideoPlayer/SimpleVideoPlayer';
import { useTranslation } from 'react-i18next';

function Section4() {
  const [t] = useTranslation('supportReportage');

  return (
    <section className="h-full mt-4 md:mt-6 lg:grid lg:grid-cols-3 lg:grids-rows-4 lg:grid-flow-col bg-brownie-gray p-4 mb-4 md:mb-0">
      <div className="row-span-3 lg:pr-8">
        <p className="font-acumin text-black-700 leading-5 xl-2:leading-6 text-justify">
          {t('reportageS4P1')}
          <br />
          <br />
          {t('reportageS4P2')}
          <br />
          <br />
          {t('reportageS4P3')}
          <br />
          <br />
          {t('reportageS4P4')}
          <br />
          <br />
          {t('reportageS4P5')}
        </p>
      </div>
      <div className="lg:row-span-2 lg:col-start-2 lg:col-end-4">
        <div className="w-full h-72 lg:h-3/4 mt-6 lg:mt-0 2xl:h-55/100w xl-2:px-20">
          <SimpleVideoPlayer embedId={t('embedIDVideo2')} />
        </div>
        <div className="my-6 lg:mt-6 lg:h-1/4">
          <p className="font-acumin text-black-700 leading-6 text-justify font-bold">
            {t('reportageS4VideoDescr')}
          </p>
        </div>
      </div>
      <div className="lg:col-start-2 lg:col-end-3">
        <p className="font-acumin text-black-700 leading-5 xl-2:leading-6 text-justify">
          {t('reportageS4P6')}
          <br />
          <br />
          {t('reportageS4P7')}
        </p>
      </div>
      <div className="lg:col-start-3 lg:col-end-4 lg:pl-8">
        <p className="font-acumin text-black-700 leading-5 xl-2:leading-6 text-justify mt-6 lg:mt-0">
          {t('reportageS4P8')}
          <br />
          <br />
          {t('reportageS4P9')}
        </p>
      </div>
    </section>
  );
}

export default Section4;
