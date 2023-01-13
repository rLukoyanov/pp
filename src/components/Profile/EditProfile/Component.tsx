import cn from 'classnames';

import { Button } from '../../common/Button';
import { Input } from '../../common/Input';

import crossSVG from './cross.svg';

import styles from './styles.module.scss';

export function EditProfile({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
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
          <input type="radio" name="tabs" id="radio-1" />
          <label className={cn(styles.tab)} htmlFor="radio-1">
            Основная информация
          </label>

          <input type="radio" name="tabs" id="radio-2" />
          <label className={cn(styles.tab)} htmlFor="radio-2">
            Контактная информация
          </label>

          <input type="radio" name="tabs" id="radio-3" />
          <label className={cn(styles.tab)} htmlFor="radio-3">
            Редактирование навыков
          </label>

          <div className={cn(styles.glider)}></div>
        </div>

        <label>
          <h3>Имя</h3>
          <Input classNames={cn(styles.input)} />
        </label>
        <label>
          <h3>Фамилия</h3>
          <Input classNames={cn(styles.input)} />
        </label>
        <label>
          <h3>Дата рождения</h3>
          <Input classNames={cn(styles.input)} />
        </label>
        <label>
          <h3>Город</h3>
          <Input classNames={cn(styles.input)} />
        </label>
        <label>
          <h3>Учебное заведение</h3>
          <Input classNames={cn(styles.input)} />
        </label>
        <label>
          <h3>Изменить пароль</h3>
          <Input classNames={cn(styles.input)} />
        </label>
        <label>
          <h3>Изменить пароль</h3>
          <Input classNames={cn(styles.input)} />
        </label>
        <br />
        <Button className={cn(styles.done)}>Сохранить изменения</Button>
      </div>
    </div>
  );
}
