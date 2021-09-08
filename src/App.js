import Section from './Components/Section/Section';
import CausesDeco from './images/support/support-main.png';
import SupportMainSect from "./SupportMainSect"

function App() {
  return (
    <div className="App">
      <Section bannerLand={CausesDeco}>
        <SupportMainSect />
      </Section>
    </div>
  )
}

export default App
