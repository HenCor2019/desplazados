import './App.scss'
import Home from './Containers/Home';
import Section from './Section';
import CausesDeco from './images/support/support-main.png';
import SupportMainSect from "./SupportMainSect"

function App() {
  return (
    <div className="App">
      <Section img={CausesDeco}>
        <SupportMainSect />
      </Section>
    </div>
  )
}

export default App
