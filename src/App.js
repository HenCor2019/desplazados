import './App.scss'
import Home from './Containers/Home';
import Section from './Section';
import CausesDeco from './images/blue-deco.png';

function App() {
  return (
    <div className="App">
      <Section img={CausesDeco} />
    </div>
  )
}

export default App
