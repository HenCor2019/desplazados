import styles from './flag.module.scss';

const Flag = ({ src, alt, type }) => {
  const style = {
    homepage: styles.homepage,
    'navbar-landscape': styles.navbar___landscape,
    'navbar-portrait': styles.navbar___portrait
  };

  return (
    <img src={src} alt={alt} className={`${styles.flag} ${style[type]}`} />
  );
};

export default Flag;
