import Home from './pages/Home'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Section from './Components/Section/Section'

import YoutubeVideo from './pages/Video/index'
import SupportMainSect from './pages/Support/SupportMainSect'
import Statistics from './pages/Support/Statistics'
import StatisticsBanner from './assets/images/Support/Statistics/statistics-banner.png'
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
import WaitingTimeGallery  from './pages/WaitingTime/WaitingTimeGallery'

import { Helmet } from 'react-helmet'

import './assets/css/index.css'

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
          <Section bannerLand={WaitingTimeBanner} >
            <WaitingTime />
          </Section>
        </Route>

        <Route exact path="/la-espera/meanwhile">
          <Helmet>
            <title> Desplazados - Mientras esperamos </title>
          </Helmet>

          <Section bannerLand={WaitingTimeBanner}>
            <Meanwhile/>
          </Section>
        </Route>

        <Route exact path="/la-espera/gallery">
          <Helmet>
            <title> Desplazados - Galería </title>
          </Helmet>

          <Section bannerLand={WaitingTimeBanner}>
            <WaitingTimeGallery/>
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
            <SupportMainSect/>
          </Section>
        </Route>
        <Route exact path="/apoyo/estadisticas">
          <Helmet>
            <title> Desplazados - Estadísticas </title>
          </Helmet>
          <Section bannerLand={StatisticsBanner}>
            <Statistics/>
          </Section>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
