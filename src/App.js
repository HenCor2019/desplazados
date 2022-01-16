import Home from './pages/Home'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Section from './Components/Section/Section'

import YoutubeVideo from './pages/Video/index'
import SupportMainSect from './pages/Support/SupportMainSect'
import Statistics from './pages/Support/Statistics/Statistics'
import StatisticsBanner from './assets/images/support/Statistics/statistics-banner.png'
import Reportages from './pages/Support/Reportages/Reportages'
import ReportagesBanner from './assets/images/support/Reportage/reportage-banner.png'
import Concepts from './pages/Support/Concepts/Concepts'
import ConceptsBanner from './assets/images/support/Concepts/concepts-banner.png'
import SupportBanner from './assets/images/support/support-main.png'
import SupportPortBanner from './assets/images/Banners/Mobile/support-banner.png'
import SupportPortBanner2 from './assets/images/Banners/Mobile/support.png'
import WaitingTimeBanner from './assets/images/WaitingTime/largeBanner.png'
import WaitingPortBanner from './assets/images/Banners/Mobile/waiting-banner.png'
import WaitingPortBanner2 from './assets/images/Banners/Mobile/waiting.png'
import WaitingTime from './pages/WaitingTime/WaitingTime'
import Meanwhile from './pages/WaitingTime/Meanwhile'
import CausesBanner from './assets/images/Causes/causes-banner.png'
import CausesPortBanner from './assets/images/Banners/Mobile/causes-banner.png'
import CausesPortBanner2 from './assets/images/Banners/Mobile/causes.png'
import CausesBannerText from './assets/images/Causes/green_banner_text.png'
import CausesDrawingsBanner from './assets/images/Banners/banner-drawings.png'
import CausesStoryBanner from './assets/images/Banners/banner-story.png'
import CausesSect from './pages/Causes/index'
import CausesGallery from './pages/Gallery/index'
import DreamsBanner from './assets/images/Dreams/dreams-banner.png'
import PodcastBanner from './assets/images/Banners/dream-podcast.png'
import DreamsGalleryBanner from './assets/images/Banners/dreams-gallery.png'
import DreamsPortBanner from './assets/images/Banners/Mobile/dreams-banner.png'
import DreamsPortBanner2 from './assets/images/Banners/Mobile/dreams.png'
import DreamsGallery from './pages/DreamsGallery'
import Dreams from './pages/Dreams/index'
import WaitingTimeGallery from './pages/WaitingTime/WaitingTimeGallery'
import WaitingSmallBanner from './assets/images/Banners/wait-s-banner.png'
import WaitingGalleryBanner from './assets/images/Banners/wait-gallery-banner.png'
import WaitingProcessBanner from './assets/images/Banners/wait-process-banner.png'
import WaitingVideosBanner from './assets/images/Banners/wait-videos-banner.png'
import WaitingTimeProcess from './pages/WaitingTime/Process'
import Poadcast from './pages/Dreams/Poadcast'

import { Helmet } from 'react-helmet'
import './assets/css/index.css'
import Comic from './pages/Comic/FlipPage'
import NotesImages from './pages/Support/Concepts/NotesImages'
import NotFound from './pages/NotFound'

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

          <Section bannerLand={CausesBanner} bannerPort={CausesPortBanner}>
            <CausesSect />
          </Section>
        </Route>

        <Route exact path="/causas/comic">
          <Helmet>
            <title> Desplazados - Comic </title>
          </Helmet>
          <Section bannerLand={CausesStoryBanner} bannerPort={CausesPortBanner2}>
            <Comic />
          </Section>
        </Route>

        <Route exact path="/causas/galeria">
          <Helmet>
            <title> Desplazados - Galería </title>
          </Helmet>

          <Section bannerLand={CausesDrawingsBanner} bannerPort={CausesPortBanner2}>
            <CausesGallery />
          </Section>
        </Route>

        <Route exact path="/la-espera">
          <Helmet>
            <title> Desplazados - Tiempo de Espera </title>
          </Helmet>
          <Section
            bannerLand={WaitingTimeBanner}
            bannerPort={WaitingPortBanner}
          >
            <WaitingTime />
          </Section>
        </Route>

        <Route exact path="/la-espera/mientras-tanto">
          <Helmet>
            <title> Desplazados - Mientras esperamos </title>
          </Helmet>

          <Section
            bannerLand={WaitingVideosBanner}
            bannerPort={WaitingPortBanner2}
          >
            <Meanwhile />
          </Section>
        </Route>

        <Route exact path="/la-espera/galeria">
          <Helmet>
            <title> Desplazados - Galería </title>
          </Helmet>

          <Section
            bannerLand={WaitingGalleryBanner}
            bannerPort={WaitingPortBanner2}
          >
            <WaitingTimeGallery />
          </Section>
        </Route>

        <Route exact path="/la-espera/proceso">
          <Helmet>
            <title> Desplazados - Procesos </title>
          </Helmet>

          <Section
            bannerLand={WaitingProcessBanner}
            bannerPort={WaitingPortBanner2}
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
          <Section bannerLand={SupportBanner} bannerPort={SupportPortBanner}>
            <SupportMainSect />
          </Section>
        </Route>
        <Route exact path="/apoyo/conceptos">
          <Helmet>
            <title> Desplazados - Conceptos </title>
          </Helmet>
          <Section bannerLand={ConceptsBanner} bannerPort={SupportPortBanner2}>
            <Concepts />
          </Section>
        </Route>
        <Route exact path="/apoyo/estadisticas">
          <Helmet>
            <title> Desplazados - Estadísticas </title>
          </Helmet>
          <Section
            bannerLand={StatisticsBanner}
            bannerPort={SupportPortBanner2}
          >
            <Statistics />
          </Section>
        </Route>
        <Route exact path="/apoyo/reportajes">
          <Helmet>
            <title> Desplazados - Reportajes </title>
          </Helmet>
          <Section
            bannerLand={ReportagesBanner}
            bannerPort={SupportPortBanner2}
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
  )
}

export default App
