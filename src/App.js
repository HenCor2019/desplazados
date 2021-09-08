import Home from './pages/Home'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Section from './Components/Section/Section'
import SupportBanner from './assets/images/support/support-main.png'

import SupportMainSect from './pages/SupportMainSect'

  import './assets/css/index.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/causas">
          {/* Causas page */}
          <Section />
          <h2 className="mt-10">Causas Page</h2>
        </Route>
        <Route exact path="/la-espera">
          {/* La espera page */}
          <Section />
          <h2 className="mt-10">La Espera Page</h2>
        </Route>
        <Route exact path="/sueños">
          {/* Los sueños page */}
          <Section />
          <h2 className="mt-10">Los Sueños Page</h2>
        </Route>
        <Route exact path="/apoyo">
          {/* En busca de apoyo page */}
          <Section bannerLand={SupportBanner}> 
            <SupportMainSect/>
          </Section>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
