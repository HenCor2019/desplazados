import { Helmet } from 'react-helmet';
import i18next from 'i18next';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Section from 'shared/components/Section/Section';
import { YoutubeVideo } from 'introduction/pages';
import { CausesHome, CausesGallery, CausesComic } from 'causes/pages';
import { WaitingTime, WaitingTimeProcess, WaitingTimeMeanwhile, WaitingTimeGallery } from 'waiting/pages';
import { PodcastBanner, PodcastBannerEN } from 'shared/banners/podcast.banners';
import {
  DreamsBanner,
  DreamsBannerEN,
  DreamsGalleryBanner,
  DreamsGalleryBannerEN,
  DreamsPortBanner2,
  DreamsPortBanner,
  DreamsPortBannerEN,
  DreamsPortBanner2EN,
} from 'shared/banners/dreams.banners';
import {
  conceptsBanner_es,
  conceptsBanner_en,
} from 'shared/banners/concept.banners';
import {
  statisticsBanner_en,
  statisticsBanner_es,
} from 'shared/banners/statistics.banners';
import {
  reportagesBanner_en,
  reportagesBanner_es,
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
  WaitingTimeBanner_en,
} from 'shared/banners/waiting.banners';
import {
  CausesBanner_en,
  CausesPortBanner2,
  CausesPortBanner,
  CausesBanner_es,
  CausesStoryBanner_en,
  CausesStoryBanner_es,
  CausesDrawingsBanner_en,
  CausesDrawingsBanner_es,
} from 'shared/banners/causes.banners';
import {
  supportPortInnerBanner_en,
  supportPortInnerBanner_es,
  supportPortBanner_es,
  supportBanner_es,
  supportBanner_en,
  supportPortBanner_en,
} from 'shared/banners/support.banners';
import Home from './home/pages/Section/Home';
import NotFound from './notFound/pages/section';
import SupportMainSect from './support/components/SupportMainSect';
import Statistics from './support/pages/statistics/Statistics';
import Reportages from './support/pages/reportage/Reportages';
import Concepts from './support/pages/concepts/Concepts';
import DreamsGallery from './dreams/pages/gallery';
import Dreams from './dreams/pages/section/index';
import Poadcast from './dreams/components/poadcast/Poadcast';

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
              i18next.language === 'en' ? CausesBanner_en : CausesBanner_es
            }
            bannerPort={CausesPortBanner}
          >
            <CausesHome />
          </Section>
        </Route>

        <Route exact path="/causas/comic">
          <Helmet>
            <title> Desplazados - Comic </title>
          </Helmet>
          <Section
            bannerLand={
              i18next.language === 'en'
                ? CausesStoryBanner_en
                : CausesStoryBanner_es
            }
            bannerPort={CausesPortBanner2}
          >
            <CausesComic />
          </Section>
        </Route>

        <Route exact path="/causas/galeria">
          <Helmet>
            <title> Desplazados - Galería </title>
          </Helmet>

          <Section
            bannerLand={
              i18next.language === 'en'
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
              i18next.language === 'en'
                ? WaitingTimeBanner_en
                : WaitingTimeBanner_es
            }
            bannerPort={
              i18next.language === 'en'
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
              i18next.language === 'en'
                ? WaitingVideosBanner_en
                : WaitingVideosBanner_es
            }
            bannerPort={
              i18next.language === 'en'
                ? WaitingPortBanner2_en
                : WaitingPortBanner2_es
            }
          >
            <WaitingTimeMeanwhile />
          </Section>
        </Route>

        <Route exact path="/la-espera/galeria">
          <Helmet>
            <title> Desplazados - Galería </title>
          </Helmet>

          <Section
            bannerLand={
              i18next.language === 'en'
                ? WaitingGalleryBanner_en
                : WaitingGalleryBanner_es
            }
            bannerPort={
              i18next.language === 'en'
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
              i18next.language === 'en'
                ? WaitingProcessBanner_en
                : WaitingProcessBanner_es
            }
            bannerPort={
              i18next.language === 'en'
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
          <Section
            bannerLand={
              i18next.language === 'en'
                ? DreamsBannerEN
                : DreamsBanner
            }
            bannerPort={
              i18next.language === 'en'
                ? DreamsPortBannerEN
                : DreamsPortBanner
            }
          >
            <Dreams />
          </Section>
        </Route>

        <Route exact path="/sueños/podcast">
          <Helmet>
            <title> Desplazados - Poadcast </title>
          </Helmet>

          <Section
            bannerLand={
              i18next.language === 'en'
                ? PodcastBannerEN
                : PodcastBanner
            }
            bannerPort={
              i18next.language === 'en'
                ? DreamsPortBanner2EN
                : DreamsPortBanner2
            }
          >
            <Poadcast />
          </Section>
        </Route>

        <Route exact path="/sueños/galeria">
          <Helmet>
            <title> Desplazados - Galería </title>
          </Helmet>

          <Section
            bannerLand={
              i18next.language === 'en'
                ? DreamsGalleryBannerEN
                : DreamsGalleryBanner
            }
            bannerPort={
              i18next.language === 'en'
                ? DreamsPortBanner2EN
                : DreamsPortBanner2
            }
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
              i18next.language === 'en' ? supportBanner_en : supportBanner_es
            }
            bannerPort={
              i18next.language === 'en'
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
              i18next.language === 'en' ? conceptsBanner_en : conceptsBanner_es
            }
            bannerPort={
              i18next.language === 'en'
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
              i18next.language === 'en'
                ? statisticsBanner_en
                : statisticsBanner_es
            }
            bannerPort={
              i18next.language === 'en'
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
              i18next.language === 'en'
                ? reportagesBanner_en
                : reportagesBanner_es
            }
            bannerPort={
              i18next.language === 'en'
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
