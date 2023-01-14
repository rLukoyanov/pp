import cn from 'classnames';

import { Input } from '../../../common/Input';

import styles from './styles.module.scss';

export function Contacts() {
  return (
    <div>
      <label>
        <h3>E-mail</h3>
        <Input classNames={cn(styles.input)} />
      </label>
      <label>
        <h3>Номер телефона</h3>
        <Input classNames={cn(styles.input)} />
      </label>
    </div>
  );
}
