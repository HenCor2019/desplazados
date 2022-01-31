import { Link } from 'react-router-dom'
import Banner from '../../assets/images/Home/TopPaper.png'
import { LazySection } from '../../shared/components/LazySection/LazySection';

import './index.css'

export default LazySection(function NotFound() {
  return (
    <section className="p-3 sm:p-0 font-sans text-gray-500 min-w-full min-h-screen sm:h-screen flex flex-col">
      <div className="min-h-screen w-full sm:min-h-0 sm:h-3/4 flex flex-col justify-center items-center">
        <h1 className="not-found-title w-full tracking-widest text-center">
          404
        </h1>
        <p className="text-gray-800 text-2xl my-4 text-center">
          Lo sentimos, página no encontrada
        </p>
        <Link className="underline text-xl" to="/home">
          Inicio
        </Link>
      </div>
      <img
        src={Banner}
        alt="bottom banner desplazados"
        className="w-full h-1/4 transform rotate-180 hidden sm:block"
        loading="lazy"
      />
    </section>
  )
}
)