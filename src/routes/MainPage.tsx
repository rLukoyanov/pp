import { CompanyRating } from '../components/CopmanyRating';
import { NewVacancies } from '../components/NewVacancies';
import { Responses } from '../components/Responses';

import styles from './MainPage.module.scss';

export default function MainPage() {
  return (
    <div className={styles.mainPage}>
      <div>
        <CompanyRating />
        <NewVacancies />
      </div>
      <Responses />
    </div>
  );
}
