import { useTranslation } from 'react-i18next';

const Section5 = () => {
  const [t] = useTranslation('supportReportage');

  return (
    <section className='mt-4 md:mt-6 lg:grid lg:grid-cols-3 lg:grid-flow-col p-4 mb-4 md:mb-0'>
      <div className='lg:pr-8'>
        <p className='font-acumin text-black-700 leading-5 xl-2:leading-6 text-justify'>
          {t('reportageS5P1')}
        </p>
      </div>
      <div>
        <p className='font-acumin text-black-700 leading-5 xl-2:leading-6 text-justify'>
          {t('reportageS5P2')}
          <br></br>
          <br />
          {t('reportageS5P3')}
        </p>
      </div>
      <div className='lg:pl-8'>
        <p className='font-acumin text-black-700 leading-5 xl-2:leading-6 text-justify'>
          {t('reportageS5P4')}
          <br />
          <br />
          {t('reportageS5P5')}
        </p>
      </div>
    </section>
  );
};

export default Section5;
