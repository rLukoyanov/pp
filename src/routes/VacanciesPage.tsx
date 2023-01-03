import { Vacancies } from '../components/Vacancies';

import styles from './Pages.module.scss';

export default function VacanciesPage() {
  return (
    <div className={styles.offers}>
      <Vacancies />
    </div>
  );
}
