import cn from 'classnames';
import { useEffect, useState } from 'react';
import { getProfile } from '../api/apiHelper';
import { Profile } from '../components/Profile';
import { Achievements } from '../components/Profile/Achievements';
import { WorkExp } from '../components/Profile/WorkExp';
import styles from './Pages.module.scss';

export default function ProfilePage() {
  const [active, setActive] = useState(1);
  const [profileData, setProfileData] = useState({});
  useEffect(() => {
    async function fetchData() {
      setProfileData(await getProfile());
    }
    void fetchData();
  }, []);
  return (
    <div className={styles.profilePage}>
      <Profile profileData={profileData} />
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
