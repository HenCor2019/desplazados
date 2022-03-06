import { useTranslation } from 'react-i18next';

function Section1() {
  const [t] = useTranslation('supportReportage');

  return (
    <section className="mt-2 lg:grid lg:grid-cols-3 lg:grid-flow-col p-4 mb-4 md:mb-0">
      <div className="lg:pr-8">
        <p className="font-acumin text-gray-500 text-2xl mb-6">{t('reportageVictimQuote')}</p>
        <p className="font-acumin text-black-700 leading-5 xl-2:leading-6 text-justify">
          {t('reportageS1P1')}
          <br />
          <br />
          {t('reportageS1P2')}
          <br />
          <br />
          {t('reportageS1P3')}
        </p>
      </div>
      <div>
        <p className="font-acumin text-black-700 leading-5 xl-2:leading-6 text-justify">
          {t('reportageS1P4')}
          <br />
          <br />
          {t('reportageS1P5')}
          <br />
          <br />
          {t('reportageS1P6')}
          <br />
          <br />
          {t('reportageS1P7')}
          <br />
          <br />
          {t('reportageS1P8')}
        </p>
      </div>
      <div div className="lg:pl-8">
        <div className="bg-white p-5 shadow-md my-6 lg:mb-6 lg-mt-0">
          <p className="font-acumin text-black-700 leading-5 xl-2:leading-6 text-justify italic text-lg font-thin">
            {t('reportageArticle')}
          </p>
          <p className="font-acumin text-black-700 italic mt-4 text-sm">
            {t('reportageArticleRef')}
          </p>
        </div>
        <p className="font-acumin text-black-700 leading-5 xl-2:leading-6 text-justify">
          {t('reportageS1P9')}
          <br />
          <br />
          {t('reportageS1P10')}
          <br />
          <br />
          {t('reportageS1P11')}
          <br />
          <br />
        </p>
      </div>
    </section>
  );
}

export default Section1;
