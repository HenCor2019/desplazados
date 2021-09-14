import Home from './pages/Home'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Section from './Components/Section/Section'

import YoutubeVideo from './pages/Video/index'
import SupportMainSect from './pages/Support/SupportMainSect'
import Statistics from './pages/Support/Statistics/Statistics'
import StatisticsBanner from './assets/images/Support/Statistics/statistics-banner.png'
import Reportages from './pages/Support/Reportages/Reportages'
import ReportagesBanner from './assets/images/Support/Reportage/reportage-banner.png'
import SupportBanner from './assets/images/Support/support-main.png'
import WaitingTimeBanner from './assets/images/WaitingTime/banner.png'
import WaitingTime from './pages/WaitingTime/WaitingTime'
import Meanwhile from './pages/WaitingTime/Meanwhile'
import CausesBanner from './assets/images/Causes/causes-banner.png'
import CausesBannerText from './assets/images/Causes/green_banner_text.png'
import CausesSect from './pages/Causes/index'
import CausesGallery from './pages/Gallery/index'
import DreamsBanner from './assets/images/Dreams/dreams-banner.png'
import Dreams from './pages/Dreams/index'
import WaitingTimeGallery from './pages/WaitingTime/WaitingTimeGallery'
import WaitingTimeProcess from './pages/WaitingTime/Process'

import { Helmet } from 'react-helmet'
import './assets/css/index.css'
import Comic from './pages/Comic/FlipPage'

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

          <Section bannerLand={CausesBanner}>
            <CausesSect />
          </Section>
        </Route>

        <Route exact path="/causes/comic">
          <Helmet>
            <title> Desplazados - Comic </title>
          </Helmet>
          <Section bannerLand={CausesBanner}>
            <Comic />
          </Section>
        </Route>

        <Route exact path="/causes/gallery">
          <Helmet>
            <title> Desplazados - Galería </title>
          </Helmet>

          <Section bannerLand={CausesBannerText}>
            <CausesGallery />
          </Section>
        </Route>

        <Route exact path="/la-espera">
          <Helmet>
            <title> Desplazados - Tiempo de Espera </title>
          </Helmet>
          <Section bannerLand={WaitingTimeBanner}>
            <WaitingTime />
          </Section>
        </Route>

        <Route exact path="/la-espera/meanwhile">
          <Helmet>
            <title> Desplazados - Mientras esperamos </title>
          </Helmet>

          <Section bannerLand={WaitingTimeBanner}>
            <Meanwhile title="Hola" />
          </Section>
        </Route>

        <Route exact path="/la-espera/gallery">
          <Helmet>
            <title> Desplazados - Galería </title>
          </Helmet>

          <Section bannerLand={WaitingTimeBanner}>
            <WaitingTimeGallery />
          </Section>
        </Route>

        <Route exact path="/la-espera/process">
          <Helmet>
            <title> Desplazados - Procesos </title>
          </Helmet>

          <Section bannerLand={WaitingTimeBanner}>
            <WaitingTimeProcess />
          </Section>
        </Route>

        <Route exact path="/sueños">
          <Helmet>
            <title> Desplazados - Los Sueños </title>
          </Helmet>
          <Section bannerLand={DreamsBanner}>
            <Dreams />
          </Section>
        </Route>

        <Route exact path="/apoyo">
          <Helmet>
            <title> Desplazados - En busca de apoyo </title>
          </Helmet>
          <Section bannerLand={SupportBanner}>
            <SupportMainSect />
          </Section>
        </Route>
        <Route exact path="/apoyo/estadisticas">
          <Helmet>
            <title> Desplazados - Estadísticas </title>
          </Helmet>
          <Section bannerLand={StatisticsBanner}>
            <Statistics />
          </Section>
        </Route>
        <Route exact path="/apoyo/reportajes">
          <Helmet>
            <title> Desplazados - Reportajes </title>
          </Helmet>
          <Section bannerLand={ReportagesBanner}>
            <Reportages/>
          </Section>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
