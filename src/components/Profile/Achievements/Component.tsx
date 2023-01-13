import plusSVG from '../../../assets/Icon-plus.svg';

import { Button } from '../../common/Button';

import styles from './styles.module.scss';

export function Achievements() {
  return (
    <div className={styles.achievements}>
      <div className={styles.title}>
        <h1>Достижения</h1>
        <Button type="outline">
          <img src={plusSVG} alt="buttonImg" />
        </Button>
      </div>
    </div>
  );
}
