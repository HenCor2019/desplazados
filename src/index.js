import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './App';
//import Section from './Section';
//import CausesDeco from './images/blue-deco.png';
import reportWebVitals from './reportWebVitals';
import { ConfigProvider } from './contexts/ConfigContext';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import homePagesSectionHome_es from './translations/es/home/pages/section/home.json';
import homePagesSectionHome_en from './translations/en/home/pages/section/home.json';

import waitingPagesSectionWaitingTime_es from './translations/es/waiting/pages/section/waitingTime.json';
import waitingPagesSectionWaitingTime_en from './translations/en/waiting/pages/section/waitingTime.json';
import waitingPagesProcessProcess_es from './translations/es/waiting/pages/process/process.json';
import waitingPagesProcessProcess_en from './translations/en/waiting/pages/process/process.json';
import waitingPagesGalleryGallery_es from './translations/es/waiting/pages/gallery/gallery.json';
import waitingPagesGalleryGallery_en from './translations/en/waiting/pages/gallery/gallery.json';
import waitingPagesMeanwhileMeanwhile_es from './translations/es/waiting/pages/meanwhile/meanwhile.json';
import waitingPagesMeanwhileMeanwhile_en from './translations/en/waiting/pages/meanwhile/meanwhile.json';

import causesPagesSection_en from './translations/en/causes/pages/section/causes.json';
import causesPagesSection_es from './translations/es/causes/pages/section/causes.json';
import causesPagesGallery_en from './translations/en/causes/pages/gallery/gallery.json';
import causesPagesGallery_es from './translations/es/causes/pages/gallery/gallery.json';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    es: {
      homePageSectionHome: homePagesSectionHome_es,
      waitingPagesSectionWaitingTime: waitingPagesSectionWaitingTime_es,
      waitingPagesProcessProcess: waitingPagesProcessProcess_es,
      waitingPagesGalleryGallery: waitingPagesGalleryGallery_es,
      waitingPagesMeanwhileMeanwhile: waitingPagesMeanwhileMeanwhile_es,
      causesPagesSectionHome: causesPagesSection_es,
      causesPagesGallery: causesPagesGallery_es
    },
    en: {
      homePageSectionHome: homePagesSectionHome_en,
      waitingPagesSectionWaitingTime: waitingPagesSectionWaitingTime_en,
      waitingPagesProcessProcess: waitingPagesProcessProcess_en,
      waitingPagesGalleryGallery: waitingPagesGalleryGallery_en,
      waitingPagesMeanwhileMeanwhile: waitingPagesMeanwhileMeanwhile_en,
      causesPagesSectionHome: causesPagesSection_en,
      causesPagesGallery: causesPagesGallery_en
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <ConfigProvider>
        <App />
      </ConfigProvider>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
