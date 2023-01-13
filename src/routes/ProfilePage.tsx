import cn from 'classnames';
import { Profile } from '../components/Profile';
import { WorkExp } from '../components/Profile/WorkExp';
import styles from './Pages.module.scss';

export default function ProfilePage() {
  return (
    <div className={styles.profilePage}>
      <Profile />
      <div className={styles.tabs}>
        <div className={cn(styles.tab, styles.active)}>Опыт работы</div>
        <div className={styles.tab}>Достижения</div>
      </div>

      <WorkExp />
    </div>
  );
}
