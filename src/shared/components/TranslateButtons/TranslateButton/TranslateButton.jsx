import styles from './translateButton.module.scss';

function TranslateButton({ onClick, children, type }) {
  const style = {
    homepage: styles.homepage,
    'navbar-landscape': styles.navbar___landscape,
    'navbar-portrait': styles.navbar___portrait
  };

  return (
    <button
      className={`${styles.translateButton} ${style[type]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default TranslateButton;
