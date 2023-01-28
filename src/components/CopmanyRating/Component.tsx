import { useState, useEffect } from 'react';
import { getCompanyRating, CompanyRatingResponse } from '../../api/apiHelper';
import companyLogoSVG from '../../assets/image1.svg';

import styles from './styles.module.scss';

export function CompanyRating() {
  const [ratingData, setRatingData] = useState<CompanyRatingResponse[]>();

  useEffect(() => {
    async function fetchData() {
      const data = await getCompanyRating();
      if (Array.isArray(data)) {
        setRatingData(data);
      }
    }
    void fetchData();
  }, []);

  return (
    <div className={styles.rating}>
      <h3>Рейтинг Компаний</h3>
      <div className={styles.groups}>
        <div>Место</div>
        <div>Компания</div>
        <div>Отрасль</div>
        <div className={styles.students}>Принято студентов</div>
      </div>
      {ratingData &&
        ratingData.map((item) => [
          <div className={styles.ratingItem}>
            <div>{item.pos}</div>
            <span className={styles.name}>
              <img src={companyLogoSVG} />
              <span>{item.name}</span>
            </span>
            <div>{item.industry}</div>
            <div className={styles.students}>{item.studentsCount}</div>
          </div>,
        ])}
    </div>
  );
}
