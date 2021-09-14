import React, { useState } from "react";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "../../assets/css/waitingTimeProcess/waitingTimeProcess.css";

import Image1 from "../../assets/images/WaitingTime/infographic/1.png"
import Image2 from "../../assets/images/WaitingTime/infographic/2.png"
import Image3 from "../../assets/images/WaitingTime/infographic/3.png"
import Image4 from "../../assets/images/WaitingTime/infographic/4.png"
import Image5 from "../../assets/images/WaitingTime/infographic/5.png"

import { LazySection } from "../../HOC/LazySection/LazySection";

function WaitingTimeProcess(){
    return(
            <div className="flex justify-center items-center">
                <Tabs className="react-tabs flex flex-col w-9/12 gap-4">
                    <TabList>
                        <Tab className="familyText react-tabs__tab text-xs md:text-base">La familia de Andrés</Tab>
                        <Tab className="searchText react-tabs__tab  text-xs md:text-base">Búsqueda de ayuda</Tab>
                        <Tab className="trackingText react-tabs__tab  text-xs md:text-base">Seguimiento</Tab>
                        <Tab className="accompanimentText react-tabs__tab  text-xs md:text-base">Acompañamiento</Tab>
                        <Tab className="solutionsText react-tabs__tab">Soluciones duraderas</Tab>
                    </TabList>
                    <TabPanel className="react-tabs__tab-panel react-tabs__tab-panel--selected image-content flex-rigid p-1">
                        <img className="object-contain" src={Image5} />
                    </TabPanel>
                    <TabPanel className="react-tabs__tab-panel react-tabs__tab-panel--selected image-content flex-rigid p-1">
                        <img className="object-contain" src={Image4} />
                    </TabPanel>
                    <TabPanel className="react-tabs__tab-panel react-tabs__tab-panel--selected image-content  flex-rigid p-1">
                        <img className="object-contain" src={Image3} />
                    </TabPanel>
                    <TabPanel className="react-tabs__tab-panel react-tabs__tab-panel--selected image-content  flex-rigid p-1">
                        <img className="object-contain" src={Image2} />
                    </TabPanel>
                    <TabPanel className="react-tabs__tab-panel react-tabs__tab-panel--selected image-content  flex-rigid p-1">
                        <img className="object-contain" src={Image1} />
                    </TabPanel>
                </Tabs>
            </div>
    );
}

export default WaitingTimeProcess;