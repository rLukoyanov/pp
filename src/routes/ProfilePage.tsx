import { Profile } from '../components/Profile';
import styles from './Pages.module.scss';

export default function ProfilePage() {
  return (
    <div className={styles.profilePage}>
      <Profile />
    </div>
  );
}
