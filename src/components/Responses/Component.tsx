import { Response } from './Response';

import styles from './styles.module.scss';

export function Responses() {
  return (
    <div className={styles.responses}>
      <h2>Мои отклики</h2>
      <Response statusText="Не просмотрен" status="waiting" />
      <Response statusText="Приглашение" status="invite" />
      <Response statusText="Просмотрен" status="checked" />
    </div>
  );
}
