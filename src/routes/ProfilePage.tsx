import { Profile } from '../components/Profile';
import { WorkExp } from '../components/Profile/WorkExp';
import styles from './Pages.module.scss';

export default function ProfilePage() {
  return (
    <div className={styles.profilePage}>
      <Profile />
      <WorkExp />
    </div>
  );
}
