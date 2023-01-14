import editSVG from '../../../../assets/Icon-edit.svg';
import bucketSVG from '../../../../assets/Icon-bucket.svg';
import companySVG from '../../../../assets/Icon-company.svg';
import timeSVG from '../../../../assets/Icon-time.svg';

import workAvatarPNG from '../../../../assets/workAvatar.png';

import styles from './styles.module.scss';

type CardProps = {
  content: string;
  title: string;
  time: string;
};

export function Card({ content, title, time }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.main}>
          <img
            className={styles.companyAvatar}
            src={workAvatarPNG}
            alt="workAvatar"
          />
          <div>
            <h3>{title}</h3>
            <div className={styles.info}>
              <img src={companySVG} alt="companyIcon" />
              <span className={styles.blue}>Volonteria</span>
            </div>
            <div className={styles.info}>
              <img src={timeSVG} alt="timeIcon" />
              <span>{time}</span>
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
          __html: `${content}`,
        }}
        className={styles.content}
      ></div>
    </div>
  );
}
