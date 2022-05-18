import Landscape from './landscape/Landscape';
import Portrait from './portrait/Portrait';
import Tablet from './tablet/Tablet';
import { useConfigContext } from '../../../contexts/ConfigContext';
import Footer from 'home/components/Footer';

function Concepts() {
  const { isMobile } = useConfigContext();
  const { isTablet } = useConfigContext();
  let content = null;

  if (isMobile) {
    content = (<Portrait />);
  } else if (isTablet) {
    content = (<Tablet />);
  } else {
    content = (<Landscape />);
  }

  return (
    <div>
      <main className="p-4">
        { content }
      </main>
      <Footer translateButtons={false} />
    </div>
  );
}

export default Concepts;
