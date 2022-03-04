import React from 'react';
import logoUca from 'home/assets/images/footer/LogoUCA.png';

import TranslateButtons from 'shared/components/TranslateButtons/TranslateButtons';

import styles from './footer.module.scss';

const Footer = () =>
  <footer className="h-13/100w flex flex-wrap gap-8 items-end justify-end overflow-y-auto pb-2.5 z-10">
    <a
      target="_blank"
      rel="noreferrer"
      href="https://uca.edu.sv/"
      className="w-40 mx-4 md:min-w-15/100 self-auto"
    >
      <img src={logoUca} alt="logo UCA" />
    </a>
    <div className={styles.Home__TranslateButtons}>
      <TranslateButtons type={'homepage'} />
    </div>
  </footer>;

export default Footer;
