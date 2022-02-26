import i18next from 'i18next';

import styles from './translateButtons.module.scss';
import TranslateButton from './TranslateButton/TranslateButton';

function TranslateButtons({ type }) {
  return (
    <div className={styles.translateButtons}>
      <TranslateButton
        onClick={() => i18next.changeLanguage('es')}
        text={'ES'}
        type={type}
      />
      <TranslateButton
        onClick={() => i18next.changeLanguage('en')}
        text={'EN'}
        type={type}
      />
    </div>
  );
}

export default TranslateButtons;
