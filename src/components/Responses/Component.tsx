import companyLogoSVG from '../../assets/image1.svg';

import styles from './styles.module.scss';

export function Responses() {
  return (
    <div className={styles.responses}>
      <h2>Мои отклики</h2>
      <div className={styles.response}>
        <img src={companyLogoSVG}/>
        <h3>Курьер</h3>
        <div className={styles.info}>
          <span>Мэйджор Экспресс</span>{' '}
          <svg
            width="4"
            height="4"
            viewBox="0 0 4 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="2" cy="2" r="2" fill="black" />
          </svg>
          <span className={styles.place}>Нижнекамск</span>
        </div>
        <div className={styles.status}>Просмотрен</div>
      </div>
    </div>
  );
}
