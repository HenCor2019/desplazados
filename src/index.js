import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './App';
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

import supportPage_es from './translations/es/support/supportPage.json';
import supportPage_en from './translations/en/support/supportPage.json';
import supportStatistics_es from './translations/es/support/pages/statistics.json';
import supportStatistics_en from './translations/en/support/pages/statistics.json';
import supportReportage_es from './translations/es/support/pages/reportage.json';
import supportReportage_en from './translations/en/support/pages/reportage.json';
import causesPagesSection_en from './translations/en/causes/pages/section/causes.json';
import causesPagesSection_es from './translations/es/causes/pages/section/causes.json';
import causesPagesGallery_en from './translations/en/causes/pages/gallery/gallery.json';
import causesPagesGallery_es from './translations/es/causes/pages/gallery/gallery.json';
import causesPagesComic_en from './translations/en/causes/pages/comic/comic.json';
import causesPagesComic_es from './translations/es/causes/pages/comic/comic.json';
import introduction_en from 'translations/en/introduction/introduction.json'
import introduction_es from 'translations/es/introduction/introduction.json'

import dreamsPageSection_es from './translations/es/dreams/section/dreams.json'
import dreamsPageSection_en from './translations/en/dreams/section/dreams.json'
import dreamsGallerySection_es from './translations/es/dreams/gallery/gallery.json';
import dreamsGallerySection_en from './translations/en/dreams/gallery/gallery.json';

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
      supportPage: supportPage_es,
      supportStatistics: supportStatistics_es,
      supportReportage: supportReportage_es,
      causesPagesSectionHome: causesPagesSection_es,
      causesPagesGallery: causesPagesGallery_es,
      causesPagesComic: causesPagesComic_es,
      dreamsSectionPage: dreamsPageSection_es,
      dreamsGalleryPage: dreamsGallerySection_es,
      introduction: introduction_es
    },
    en: {
      homePageSectionHome: homePagesSectionHome_en,
      waitingPagesSectionWaitingTime: waitingPagesSectionWaitingTime_en,
      waitingPagesProcessProcess: waitingPagesProcessProcess_en,
      waitingPagesGalleryGallery: waitingPagesGalleryGallery_en,
      waitingPagesMeanwhileMeanwhile: waitingPagesMeanwhileMeanwhile_en, 
      supportPage: supportPage_en,
      supportStatistics: supportStatistics_en,
      supportReportage: supportReportage_en,
      causesPagesSectionHome: causesPagesSection_en,
      causesPagesGallery: causesPagesGallery_en,
      causesPagesComic: causesPagesComic_en,
      dreamsSectionPage: dreamsPageSection_en,
      dreamsGalleryPage: dreamsGallerySection_en,
      introduction: introduction_en
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
