import editSVG from '../../../assets/Icon-edit.svg';
import bucketSVG from '../../../assets/Icon-bucket.svg';
import companySVG from '../../../assets/Icon-company.svg';
import timeSVG from '../../../assets/Icon-time.svg';
import plusSVG from '../../../assets/Icon-plus.svg';
import workAvatarPNG from '../../../assets/workAvatar.png';

import { Button } from '../../common/Button';

import styles from './styles.module.scss';

export function WorkExp() {
  return (
    <div className={styles.workExp}>
      <div className={styles.title}>
        <h1>Опыт работы</h1>
        <Button type="outline">
          <img src={plusSVG} alt="buttonImg" />
        </Button>
      </div>

      <div className={styles.header}>
        <div className={styles.main}>
          <img
            className={styles.companyAvatar}
            src={workAvatarPNG}
            alt="workAvatar"
          />
          <div>
            <h3>React developer</h3>
            <div className={styles.info}>
              <img src={companySVG} alt="companyIcon" />{' '}
              <span className={styles.blue}>Volonteria</span>
            </div>
            <div className={styles.info}>
              <img src={timeSVG} alt="timeIcon" />{' '}
              <span>Cентябрь 2020 - Май 2021</span>
            </div>
          </div>
        </div>

        <div className={styles.edit}>
          <img src={editSVG} />
          <img src={bucketSVG} />
        </div>
      </div>

      <div
        dangerouslySetInnerHTML={{
          __html: `
Полная реализация сайта и сайта администраторов.
- Адаптивная верстка.
- Работа с WordPress
- Работа с RestAPI
- Реализация ssr на Next.js
- Реализация проксирования

Стек:
- ReactJS
- Next.js
- Axios
- date-fns
- antd
- sass`,
        }}
        className={styles.content}
      ></div>
    </div>
  );
}
