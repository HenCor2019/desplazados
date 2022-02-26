import { Helmet } from 'react-helmet';
import i18next from 'i18next';
import Home from './home/pages/Section/Home';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Section from './Components/Section/Section';
import Comic from './causes/pages/Comic/FlipPage';
import NotFound from './notFound/pages/section';
import YoutubeVideo from './pages/Video/index';
import SupportMainSect from './support/components/SupportMainSect';
import Statistics from './support/pages/statistics/Statistics';
import Reportages from './support/pages/reportage/Reportages';
import Concepts from './support/pages/concepts/Concepts';
import WaitingTime from './waiting/pages/section/WaitingTime';
import Meanwhile from './waiting/pages/Meanwhile/Meanwhile';
import CausesSect from './causes/pages/Section/index';
import CausesGallery from './causes/pages/Gallery/index';
import DreamsGallery from './dreams/pages/gallery';
import Dreams from './dreams/pages/section/index';
import WaitingTimeGallery from './waiting/pages/Gallery/WaitingTimeGallery';
import WaitingTimeProcess from './waiting/pages/Process/Process';
import Poadcast from './dreams/components/poadcast/Poadcast';

// banners
import { PodcastBanner } from 'shared/banners/podcast.banners';
import {
  DreamsBanner,
  DreamsGalleryBanner,
  DreamsPortBanner2,
  DreamsPortBanner
} from 'shared/banners/dreams.banners';
import {
  conceptsBanner_es,
  conceptsBanner_en
} from 'shared/banners/concept.banners';
import {
  statisticsBanner_en,
  statisticsBanner_es
} from 'shared/banners/statistics.banners';
import {
  reportagesBanner_en,
  reportagesBanner_es
} from 'shared/banners/reportages.banners';

import {
  WaitingProcessBanner_es,
  WaitingVideosBanner_es,
  WaitingGalleryBanner_es,
  WaitingPortBanner2_es,
  WaitingPortBanner_es,
  WaitingTimeBanner_es,
  WaitingProcessBanner_en,
  WaitingVideosBanner_en,
  WaitingGalleryBanner_en,
  WaitingPortBanner2_en,
  WaitingPortBanner_en,
  WaitingTimeBanner_en
} from 'shared/banners/waiting.banners';

import {
  CausesBanner_en,
  CausesPortBanner2,
  CausesPortBanner,
  CausesBanner_es,
  CausesStoryBanner_en,
  CausesStoryBanner_es,
  CausesDrawingsBanner_en,
  CausesDrawingsBanner_es
} from 'shared/banners/causes.banners';

import {
  supportPortInnerBanner_en,
  supportPortInnerBanner_es,
  supportPortBanner_es,
  supportBanner_es,
  supportBanner_en,
  supportPortBanner_en
} from 'shared/banners/support.banners';

import './assets/css/index.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Helmet>
            <title> Desplazados - Intro </title>
          </Helmet>
          <YoutubeVideo />
        </Route>

        <Route exact path="/home">
          <Helmet>
            <title> Desplazados - Inicio </title>
          </Helmet>
          <Home />
        </Route>

        <Route exact path="/causas">
          <Helmet>
            <title> Desplazados - Causas </title>
          </Helmet>

          <Section
            bannerLand={
              i18next.language == 'en' ? CausesBanner_en : CausesBanner_es
            }
            bannerPort={CausesPortBanner}
          >
            <CausesSect />
          </Section>
        </Route>

        <Route exact path="/causas/comic">
          <Helmet>
            <title> Desplazados - Comic </title>
          </Helmet>
          <Section
            bannerLand={
              i18next.language == 'en'
                ? CausesStoryBanner_en
                : CausesStoryBanner_es
            }
            bannerPort={CausesPortBanner2}
          >
            <Comic />
          </Section>
        </Route>

        <Route exact path="/causas/galeria">
          <Helmet>
            <title> Desplazados - Galería </title>
          </Helmet>

          <Section
            bannerLand={
              i18next.language == 'en'
                ? CausesDrawingsBanner_en
                : CausesDrawingsBanner_es
            }
            bannerPort={CausesPortBanner2}
          >
            <CausesGallery />
          </Section>
        </Route>

        <Route exact path="/la-espera">
          <Helmet>
            <title> Desplazados - Tiempo de Espera </title>
          </Helmet>
          <Section
            bannerLand={
              i18next.language == 'en'
                ? WaitingTimeBanner_en
                : WaitingTimeBanner_es
            }
            bannerPort={
              i18next.language == 'en'
                ? WaitingPortBanner_en
                : WaitingPortBanner_es
            }
          >
            <WaitingTime />
          </Section>
        </Route>

        <Route exact path="/la-espera/mientras-tanto">
          <Helmet>
            <title> Desplazados - Mientras esperamos </title>
          </Helmet>

          <Section
            bannerLand={
              i18next.language == 'en'
                ? WaitingVideosBanner_en
                : WaitingVideosBanner_es
            }
            bannerPort={
              i18next.language == 'en'
                ? WaitingPortBanner2_en
                : WaitingPortBanner2_es
            }
          >
            <Meanwhile />
          </Section>
        </Route>

        <Route exact path="/la-espera/galeria">
          <Helmet>
            <title> Desplazados - Galería </title>
          </Helmet>

          <Section
            bannerLand={
              i18next.language == 'en'
                ? WaitingGalleryBanner_en
                : WaitingGalleryBanner_es
            }
            bannerPort={
              i18next.language == 'en'
                ? WaitingPortBanner2_en
                : WaitingPortBanner2_es
            }
          >
            <WaitingTimeGallery />
          </Section>
        </Route>

        <Route exact path="/la-espera/proceso">
          <Helmet>
            <title> Desplazados - Procesos </title>
          </Helmet>

          <Section
            bannerLand={
              i18next.language == 'en'
                ? WaitingProcessBanner_en
                : WaitingProcessBanner_es
            }
            bannerPort={
              i18next.language == 'en'
                ? WaitingPortBanner2_en
                : WaitingPortBanner2_es
            }
          >
            <WaitingTimeProcess />
          </Section>
        </Route>

        <Route exact path="/sueños">
          <Helmet>
            <title> Desplazados - Los Sueños </title>
          </Helmet>
          <Section bannerLand={DreamsBanner} bannerPort={DreamsPortBanner}>
            <Dreams />
          </Section>
        </Route>

        <Route exact path="/sueños/podcast">
          <Helmet>
            <title> Desplazados - Poadcast </title>
          </Helmet>

          <Section bannerLand={PodcastBanner} bannerPort={DreamsPortBanner2}>
            <Poadcast />
          </Section>
        </Route>

        <Route exact path="/sueños/galeria">
          <Helmet>
            <title> Desplazados - Galería </title>
          </Helmet>

          <Section
            bannerLand={DreamsGalleryBanner}
            bannerPort={DreamsPortBanner2}
          >
            <DreamsGallery />
          </Section>
        </Route>

        <Route exact path="/apoyo">
          <Helmet>
            <title> Desplazados - En busca de apoyo </title>
          </Helmet>
          <Section
            bannerLand={
              i18next.language == 'en' ? supportBanner_en : supportBanner_es
            }
            bannerPort={
              i18next.language == 'en'
                ? supportPortBanner_en
                : supportPortBanner_es
            }
          >
            <SupportMainSect />
          </Section>
        </Route>
        <Route exact path="/apoyo/conceptos">
          <Helmet>
            <title> Desplazados - Conceptos </title>
          </Helmet>
          <Section
            bannerLand={
              i18next.language == 'en' ? conceptsBanner_en : conceptsBanner_es
            }
            bannerPort={
              i18next.language == 'en'
                ? supportPortInnerBanner_en
                : supportPortInnerBanner_es
            }
          >
            <Concepts />
          </Section>
        </Route>
        <Route exact path="/apoyo/estadisticas">
          <Helmet>
            <title> Desplazados - Estadísticas </title>
          </Helmet>
          <Section
            bannerLand={
              i18next.language == 'en'
                ? statisticsBanner_en
                : statisticsBanner_es
            }
            bannerPort={
              i18next.language == 'en'
                ? supportPortInnerBanner_en
                : supportPortInnerBanner_es
            }
          >
            <Statistics />
          </Section>
        </Route>
        <Route exact path="/apoyo/reportajes">
          <Helmet>
            <title> Desplazados - Reportajes </title>
          </Helmet>
          <Section
            bannerLand={
              i18next.language == 'en'
                ? reportagesBanner_en
                : reportagesBanner_es
            }
            bannerPort={
              i18next.language == 'en'
                ? supportPortInnerBanner_en
                : supportPortInnerBanner_es
            }
          >
            <Reportages />
          </Section>
        </Route>
        <Route path="/">
          <Helmet>
            <title>Desplazados - Página no encontrada</title>
          </Helmet>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
