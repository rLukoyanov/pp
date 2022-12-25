import { Link } from 'react-router-dom';
import { CompanyRating } from '../components/CopmanyRating';
import { Responses } from '../components/Responses';

import styles from './MainPage.module.scss';

export default function MainPage() {
  return (
    <div className={styles.mainPage}>
      <CompanyRating />
      <Responses />
    </div>
  );
}
