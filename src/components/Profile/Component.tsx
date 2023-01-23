import { useState } from 'react';
import avatarPNG from '../../assets/avarar.png';
import editSVG from '../../assets/Icon-edit.svg';

import { Advantage } from '../common/Advantage';
import { Contact } from './Contact';
import { EditProfile } from './EditProfile';

import styles from './styles.module.scss';

type ProfileData = {
  id?: number;
  name?: string;
  surName?: string;
  contacts?: {
    email?: string;
    phoneNumber?: string;
    city?: string;
    university?: string;
  };
  advantages?: [];
};

type ProfileProps = {
  profileData: ProfileData;
};

export function Profile({ profileData }: ProfileProps) {
  const [isEditing, setIsEditing] = useState(false);
  const openEdit = () => {
    setIsEditing(true);
  };

  const closeEdit = () => {
    setIsEditing(false);
  };

  return (
    <div className={styles.profile}>
      {isEditing && <EditProfile onClick={closeEdit} />}
      <div className={styles.left}>
        <img src={avatarPNG} />
        <h3>
          {profileData.name} {profileData.surName}
        </h3>
        <div className={styles.age}>20 лет</div>
        <a onClick={openEdit}>
          <img src={editSVG} />
          <span>Редактировать профиль</span>
        </a>
      </div>
      <div className={styles.contacts}>
        <Contact title="E-mail" text={profileData.contacts?.email} />
        <Contact title="Телефон" text={profileData.contacts?.phoneNumber} />
        <Contact title="Город" text={profileData.contacts?.city} />
        <Contact
          title="Учебное заведение"
          text="Уральский федеральный университет"
        />
      </div>
      <div className={styles.advantages}>
        <h3>Навыки</h3>
        <ul>
          {profileData.advantages?.map((item) => (
            <Advantage color top left>
              {item}
            </Advantage>
          ))}
        </ul>
      </div>
    </div>
  );
}
