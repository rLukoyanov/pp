import cn from 'classnames';
import { useState } from 'react';

import { Button } from '../../common/Button';
import { Input } from '../../common/Input';
import { Advandages } from './Advantages';
import { Contacts } from './Contacts';

import crossSVG from './cross.svg';
import { MainInfo } from './MainInfo';

import styles from './styles.module.scss';

export function EditProfile({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  const [check, setCheck] = useState('radio-2');

  const changeTab = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheck(e.currentTarget.id);
  };

  return (
    <div className={cn(styles.editProfile)}>
      <div className={cn(styles.content)}>
        <div className={cn(styles.header)}>
          <h2>Опыт работы</h2>

          <button className={cn(styles.close)} onClick={onClick}>
            <img src={crossSVG} alt="close button" />
          </button>
        </div>

        <div className={cn(styles.tabs)}>
          <input onChange={changeTab} type="radio" name="tabs" id="radio-1" />
          <label className={cn(styles.tab)} htmlFor="radio-1">
            Основная информация
          </label>

          <input onChange={changeTab} type="radio" name="tabs" id="radio-2" />
          <label className={cn(styles.tab)} htmlFor="radio-2">
            Контактная информация
          </label>

          <input onChange={changeTab} type="radio" name="tabs" id="radio-3" />
          <label className={cn(styles.tab)} htmlFor="radio-3">
            Редактирование навыков
          </label>

          <div className={cn(styles.glider)}></div>
        </div>
        {check === 'radio-1' && <MainInfo />}
        {check === 'radio-2' && <Contacts />}
        {check === 'radio-3' && <Advandages />}
        <br />
        <Button className={cn(styles.done)}>Сохранить изменения</Button>
      </div>
    </div>
  );
}
