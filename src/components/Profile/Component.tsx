import avatarPNG from '../../assets/avarar.png';
import editSVG from '../../assets/Icon-edit.svg';
import { Advantage } from '../common/Advantage';
import { Contact } from './Contact';
import styles from './styles.module.scss';

export function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.left}>
        <img src={avatarPNG} />
        <h3>Мария Иванова</h3>
        <div className={styles.age}>20 лет</div>
        <a>
          <img src={editSVG} />
          <span>Редактировать профиль</span>
        </a>
      </div>
      <div className={styles.contacts}>
        <Contact title="E-mail" text="example343@gmail.com" />
        <Contact title="Телефон" text="+7 908 088 88 77" />
        <Contact title="Город" text="Екатеринбург" />
        <Contact
          title="Учебное заведение"
          text="Уральский федеральный университет"
        />
      </div>
      <div className={styles.advantages}>
        <h3>Навыки</h3>
        <ul>
          <Advantage color>Figma</Advantage>
          <Advantage color left>
            Illustrator
          </Advantage>
          <Advantage color top>
            Product design
          </Advantage>
          <Advantage color top>
            Workflow
          </Advantage>
          <Advantage color left top>
            ux/ui
          </Advantage>
        </ul>
      </div>
    </div>
  );
}
