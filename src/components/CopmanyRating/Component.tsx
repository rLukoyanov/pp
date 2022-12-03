import cn from 'classnames';

import styles from './styles.module.scss';

export function CompanyRating() {
  const classNames = cn(styles.rating);
  return (
    <div className={classNames}>
      <h2>Рейтинг компаний</h2>
      <div>Место Компания Отрасль Принято студентовв</div>
      <div>1 iPlast Промышленность 30 студентов</div>
      <div>1 iPlast Промышленность 30 студентов</div>
      <div>1 iPlast Промышленность 30 студентов</div>
      <div>1 iPlast Промышленность 30 студентов</div>
    </div>
  );
}
