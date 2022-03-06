import Section1 from '../Section1';
import Section2 from '../Section2';
import Section3 from '../Section3';
import Section4 from '../Section4';
import Section5 from '../Section5';

const separation = (
  <p className="text-2xl font-bold text-right mt-4 pr-4">***</p>
);

function Landscape() {
  return (
    <div>
      <Section1 />
      {separation}
      <Section2 />
      {separation}
      <Section3 />
      {separation}
      <Section4 />
      {separation}
      <Section5 />
    </div>
  );
}

export default Landscape;
