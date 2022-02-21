import { useTranslation } from 'react-i18next';

const Section3 = () => {
  const [t] = useTranslation('supportReportage');

  return (
    <section className='mt-4 md:mt-6 lg:grid lg:grid-cols-3 lg:grid-flow-col p-4 mb-4 md:mb-0'>
      <div className='lg:pr-8'>
        <p className='font-acumin text-black-700 leading-5 xl-2:leading-6 text-justify'>
          {t('reportageS3P1')}
          <br />
          <br />
          {t('reportageS3P2')}
        </p>
      </div>
      <div>
        <p className='font-acumin text-black-700 leading-5 xl-2:leading-6 text-justify'>
          {t('reportageS3P3')}
          <br />
          <br />
          {t('reportageS3P4')}
        </p>
      </div>
      <div className='lg:pl-8'>
        <p className='font-acumin text-black-700 leading-5 xl-2:leading-6 text-justify'>
          {t('reportageS3P5')}
          <br />
          <br />
          {t('reportageS3P6')}
        </p>
      </div>
    </section>
  );
};

export default Section3;
