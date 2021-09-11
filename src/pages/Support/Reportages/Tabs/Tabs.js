import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './style.css';
import Section1 from '../Sections/Section1'
import Section2 from '../Sections/Section2'
import Section3 from '../Sections/Section3'
import Section4 from '../Sections/Section4'
import Section5 from '../Sections/Section5'

export default () => (
    <Tabs>
        <TabList>
            <Tab>1</Tab>
            <Tab>2</Tab>
            <Tab>3</Tab>
            <Tab>4</Tab>
            <Tab>5</Tab>
        </TabList>

        <TabPanel>
            <Section1 />
        </TabPanel>
        <TabPanel>
            <Section2 />
        </TabPanel>
        <TabPanel>
            <Section3 />
        </TabPanel>
        <TabPanel>
            <Section4 />
        </TabPanel>
        <TabPanel>
            <Section5 />
        </TabPanel>
    </Tabs>
);