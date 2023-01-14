import cn from 'classnames';

import { Input } from '../../../common/Input';

import styles from './styles.module.scss';

export function MainInfo() {
  return (
    <div>
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
    </div>
  );
}
