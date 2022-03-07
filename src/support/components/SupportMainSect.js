import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import concepts_es from '../assets/images/icons/es/concepts_es.png';
import concepts_en from '../assets/images/icons/en/concepts_en.png';
import reportage_es from '../assets/images/icons/es/reportage_es.png';
import reportage_en from '../assets/images/icons/en/reportage_en.png';
import statistics_es from '../assets/images/icons/es/statistics_es.png';
import statistics_en from '../assets/images/icons/en/statistics_en.png';

import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

import { LazySection } from '../../shared/components/LazySection/LazySection';
import Hoverable from '../../shared/components/Hoverable/Hoverable';

function SupportMainSect() {
    const [t] = useTranslation('supportPage');

    const { push } = useHistory();
    const [isConceptsHover, setConceptsHover] = useState(false);
    const [isReportHover, setReportHover] = useState(false);
    const [isStatisticsHover, setStatisticsHover] = useState(false);

    let style1, style2, style3;
    const grayscale = { 'filter': 'grayscale(1)' }

    if (isConceptsHover) {
        style2 = grayscale;
        style3 = grayscale;
    }
    else if (isReportHover) {
        style1 = grayscale;
        style2 = grayscale;
    }
    else if (isStatisticsHover) {
        style1 = grayscale;
        style3 = grayscale;
    }

    return (
        <div className="h-full w-full flex items-center">
            <main className="h-auto w-full grid lg-2:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:grid-rows-min gap-4 p-0 sm:p-8 lg-2:p-4">
                <div className="h-auto flex sm:w-full items-center lg-2:items-end justify-start sm:justify-center lg-2:justify-start p-4 sm:p-0">
                    <Hoverable src={i18next.language === 'en' ? concepts_en : concepts_es}
                        HtmlTag="img" 
                        alt={i18next.language === 'en' ? 'Concepts' : 'Conceptos'}
                        style={ style1 } 
                        className="object-contain w-10/12 sm:w-3/4 sm:min-w-support-image cursor-pointer"
                        onClick={()=> { push("/apoyo/conceptos") }}
                        onHoverIn={() => setConceptsHover(true)} 
                        onHoverOut={() => setConceptsHover(false)} 
                        loading="lazy" />
                </div>
                <div className="flex h-auto w-full justify-end sm:items-center lg-2:items-start sm:justify-center lg-2:justify-start lg-2:col-span-2 sm:p-8 p-4">
                    <Hoverable src={i18next.language === 'en' ? statistics_en : statistics_es} 
                        HtmlTag="img" 
                        alt={i18next.language === 'en' ? 'Statistics' : 'Estadísticas'} 
                        style={ style2 } 
                        className="object-contain w-10/12 lg-2:w-3/8 sm:min-w-support-image cursor-pointer" 
                        onClick={()=> { push("/apoyo/estadisticas") }}
                        onHoverIn={() => setStatisticsHover(true)} 
                        onHoverOut={() => setStatisticsHover(false)} 
                        loading="lazy" />
                </div>
                <div className="bg-blue-900 sm:bg-transparent h-auto w-full lg-2:pr-8 lg-2:col-span-2 sm:p-3 sm:p-0 row-start-4 row-end-5 sm:row-start-auto sm:row-end-auto">
                    <p className="h-auto text-justify sm:mt-6 sm:pl-8 text-sm sm:text-base lg-2:px-0 xl-2:w-7/12 xl-2:mx-auto xl-2:mt-16 leading-snug text-white sm:text-black-700 font-acumin p-4 sm:p-0">
                    {t('supportIntro')}
                    </p>
                </div>
                <div className="flex sm:w-full items-center lg-2:items-start justify-start sm:justify-center lg-2:justify-start row-start-3 row-end-4 sm:row-start-auto sm:row-end-auto p-4 sm:p-0">
                    <Hoverable src={i18next.language === 'en' ? reportage_en : reportage_es} 
                        HtmlTag="img" 
                        alt={i18next.language === 'en' ? 'Reportage' : 'Reportaje'}
                        style={ style3 } 
                        className="object-contain w-10/12 sm:w-3/4 sm:min-w-support-image cursor-pointer"
                        onClick={()=> { push("/apoyo/reportajes") }}
                        onHoverIn={() => setReportHover(true)} 
                        onHoverOut={() => setReportHover(false)} 
                        loading="lazy" />
                </div>
            </main>
        </div>
    )
}

export default LazySection(SupportMainSect)
