import styles from './styles.module.scss';
import { Vacancy } from './Vacancy';

export function NewVacancies() {
  return (
    <div className={styles.newVacancies}>
      <h2>Новые вакансии</h2>
      <div className={styles.background}>
        <Vacancy />
        <Vacancy />
      </div>
    </div>
  );
}
