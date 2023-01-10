import { Offers } from '../components/Offers';

import styles from './Pages.module.scss';

export default function VacanciesPage() {
  return (
    <div className={styles.offers}>
      <Offers />
    </div>
  );
}
