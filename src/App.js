import Home from './pages/Home'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Section from './Components/Section/Section'
import SupportBanner from './assets/images/Support/support-main.png'
import YoutubeVideo from './pages/Video/index'
import SupportMainSect from './pages/Support/SupportMainSect'
import Statistics from './pages/Support/Statistics'
import StatisticsBanner from './assets/images/Support/Statistics/statistics-banner.png'

import { Helmet } from 'react-helmet';

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
          <Section />
          <h2 className="mt-10">Causas Page</h2>
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
        <Route exact path="/apoyo/reportajes">
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
