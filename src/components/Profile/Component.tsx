import avatarPNG from '../../assets/avarar.png';
import styles from './styles.module.scss';

export function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.left}>
        <img src={avatarPNG} />
        <h3>Мария Иванова</h3>
        <div>20 лет</div>
      </div>
      <div>center</div>
      <div>rigth</div>
    </div>
  );
}
