import companySVG from '../../../assets/image1.svg';
import { Button } from '../../common/Button';

import styles from './styles.module.scss';

export function Vacancy() {
  return (
    <div className={styles.vacancy}>
      <div className={styles.header}>
        <img src={companySVG} />
        <span>от 20 000 руб</span>
      </div>
      <h3>Сборщик-грузчик</h3>
      <div className={styles.advantages}>
        <span>Без опыта</span>
        <span>Практика</span>
        <span>Полная занятость</span>
      </div>
      <Button>Подробнее</Button>
    </div>
  );
}
