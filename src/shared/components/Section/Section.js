import { useConfigContext } from 'contexts/ConfigContext';
import Landscape from './Landscape/Landscape';
import Portrait from './Portrait/Portrait';

const links = [
  { title: 'Inicio', path: '/home' },
  { title: 'Causas', path: '/causas' },
  { title: 'Tiempo de Espera', path: '/la-espera' },
  { title: 'Los sueños', path: '/sueños' },
  { title: 'En busca de apoyo', path: '/apoyo' },
];

function Section({ children, bannerLand, bannerPort }) {
  const { isMobile } = useConfigContext();
  const { isTablet } = useConfigContext();
  let layout = null;

  if (isMobile || isTablet) {
    layout = (
      <Portrait
        links={links}
        banner={bannerPort}
      >

        { children }

      </Portrait>
    );
  } else {
    layout = (
      <Landscape
        links={links}
        banner={bannerLand}
      >

        { children }

      </Landscape>
    );
  }

  /** TODO: Crear layout en movil */

  return layout;
}

export default Section;
