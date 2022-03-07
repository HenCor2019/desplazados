import i18next from 'i18next';

import SPAIN from 'shared/assets/images/flags/spain_flag.png';
import USA from 'shared/assets/images/flags/usa_flag.png';

import TranslateButton from './TranslateButton/TranslateButton';
import Flag from './Flag/Flag';

import styles from './translateButtons.module.scss';

function TranslateButtons({ type }) {
  const style = {
    homepage: styles.homepage,
    'navbar-landscape': styles.navbar___landscape,
    'navbar-portrait': styles.navbar___portrait
  };

  return (
    <div className={`${styles.translateButtons} ${style[type]}`}>
      <TranslateButton onClick={() => i18next.changeLanguage('es')} type={type}>
        <Flag src={SPAIN} alt="spain flag" type={type} />
      </TranslateButton>
      <TranslateButton onClick={() => i18next.changeLanguage('en')} type={type}>
        <Flag src={USA} alt="spain flag" type={type} />
      </TranslateButton>
    </div>
  );
}

export default TranslateButtons;
