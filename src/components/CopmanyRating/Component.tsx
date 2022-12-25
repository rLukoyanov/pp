import companyLogoSVG from '../../assets/image1.svg';

import styles from './styles.module.scss';

export function CompanyRating() {
  return (
    <div className={styles.rating}>
      <h3>Рейтинг Компаний</h3>
      <div className={styles.groups}>
        <div>Место</div>
        <div>Компания</div>
        <div>Отрасль</div>
        <div className={styles.students}>Принято студентов</div>
      </div>
      <div className={styles.ratingItem}>
        <div>1</div>
        <span className={styles.name}>
          <img src={companyLogoSVG} />
          <span>iPlast</span>
        </span>
        <div>Промышленность</div>
        <div className={styles.students}>30 студентов</div>
      </div>
      <div className={styles.ratingItem}>
        <div>2</div>
        <span className={styles.name}>
          <img src={companyLogoSVG} />
          <span>iPlast</span>
        </span>
        <div>Промышленность</div>
        <div className={styles.students}>30 студентов</div>
      </div>
      <div className={styles.ratingItem}>
        <div>3</div>
        <span className={styles.name}>
          <img src={companyLogoSVG} />
          <span>iPlast</span>
        </span>
        <div>Логистика</div>
        <div className={styles.students}>30 студентов</div>
      </div>
      <div className={styles.ratingItem}>
        <div>4</div>
        <span className={styles.name}>
          <img src={companyLogoSVG} />
          <span>iPlast</span>
        </span>
        <div>Промышленность</div>
        <div className={styles.students}>30 студентов</div>
      </div>
    </div>
  );
}
