import Home from './pages/Home'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Section from './Components/Section/Section'
import SupportBanner from './assets/images/support/support-main.png'
import DreamsBanner from './assets/images/Dreams/dreams-banner.png'
import YoutubeVideo from './pages/Video/index'
import SupportMainSect from './pages/SupportMainSect'
import Dreams from './pages/Dreams/index'

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
      </Switch>
    </Router>
  )
}

export default App
