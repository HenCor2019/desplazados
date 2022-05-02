import { ReactComponent as Backward } from 'dreams/assets/svg/backward.svg';
import { ReactComponent as Forward } from 'dreams/assets/svg/forward.svg';
import { ReactComponent as Pause } from 'dreams/assets/svg/pause.svg';

import styles from '../Audio.module.css'
export const customIcons = {
  pause: <Pause className={styles.customIcons} />,
  previous: (
   <Backward className={styles.customIcons} />
  ),
  next: (
   <Forward className={styles.customIcons} />
  ),
 };
