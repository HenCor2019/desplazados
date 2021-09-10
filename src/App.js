import Home from './pages/Home'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Section from './Components/Section/Section'
import SupportBanner from './assets/images/support/support-main.png'
import CausesBanner from './assets/images/Causes/causes-banner.png'
import CausesBannerText from './assets/images/Causes/green_banner_text.png'
import YoutubeVideo from './pages/Video/index'
import SupportMainSect from './pages/SupportMainSect'
import CausesSect from './pages/Causes/index'
import CausesGallery from './pages/Gallery/index'

import { Helmet } from 'react-helmet'
import './assets/css/index.css'
import Comic from './pages/Comic/Comic'

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
          <Section />
          <h2 className="mt-10">Tiempo Espera Page</h2>
        </Route>

        <Route exact path="/sueños">
          <Helmet>
            <title> Desplazados - Los Sueños </title>
          </Helmet>
          <Section />
          <h2 className="mt-10">Los Sueños Page</h2>
        </Route>

        <Route exact path="/apoyo">
          <Helmet>
            <title> Desplazados - En busca de apoyo </title>
          </Helmet>
          <Section bannerLand={SupportBanner}>
            <SupportMainSect />
          </Section>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
