import cn from 'classnames';
import { useState } from 'react';
import { Profile } from '../components/Profile';
import { Achievements } from '../components/Profile/Achievements';
import { WorkExp } from '../components/Profile/WorkExp';
import styles from './Pages.module.scss';

export default function ProfilePage() {
  const [active, setActive] = useState(1);
  return (
    <div className={styles.profilePage}>
      <Profile />
      <div className={styles.tabs}>
        <div
          onClick={() => setActive(1)}
          className={cn(styles.tab, { [styles.active]: active === 1 })}
        >
          Опыт работы
        </div>
        <div
          onClick={() => setActive(2)}
          className={cn(styles.tab, { [styles.active]: active === 2 })}
        >
          Достижения
        </div>
      </div>
      {active === 1 && <WorkExp />}
      {active === 2 && <Achievements />}
    </div>
  );
}
