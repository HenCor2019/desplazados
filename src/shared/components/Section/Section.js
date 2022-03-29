import { useConfigContext } from 'contexts/ConfigContext';
import Landscape from './Landscape/Landscape';
import Portrait from './Portrait/Portrait';

import { useTranslation } from 'react-i18next';

function ShowMenu({ children, bannerLand, bannerPort }) {
  const [t] = useTranslation('sharedSection');

  const { isMobile } = useConfigContext();
  const { isTablet } = useConfigContext();
  let layout = null;

  const links = [
    { title: t('home'), path: '/home' },
    { title: t('causes'), path: '/causas' },
    { title: t('theWaiting'), path: '/la-espera' },
    { title: t('dreams'), path: '/sueños' },
    { title: t('lookingforsupport'), path: '/apoyo' }
  ]

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

  return layout;
}
/*
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
 */

export default ShowMenu;
