import { Link } from 'react-router-dom';
import Banner from 'shared/assets/images/topPaper/TopPaper.png';
import { LazySection } from 'shared/components/LazySection/LazySection';

import { useTranslation } from 'react-i18next';

import './index.css';

export default LazySection(function NotFound() {
  const [t] = useTranslation('notFoundPagesSectionNotFound');

  return (
    <section className="p-3 sm:p-0 font-sans text-gray-500 min-w-full min-h-screen sm:h-screen flex flex-col">
      <div className="min-h-screen w-full sm:min-h-0 sm:h-3/4 flex flex-col justify-center items-center">
        <h1 className="not-found-title w-full tracking-widest text-center">
          404
        </h1>
        <p className="text-gray-800 text-2xl my-4 text-center">
          {t('message')}
        </p>
        <Link className="underline text-xl" to="/home">
          {t('home')}
        </Link>
      </div>
      <img
        src={Banner}
        alt="bottom banner desplazados"
        className="w-full h-1/4 transform rotate-180 hidden sm:block"
        loading="lazy"
      />
    </section>
  );
});
