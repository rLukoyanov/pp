import cn from 'classnames';

import { Input } from '../../../common/Input';

import styles from './styles.module.scss';

export function Advandages() {
  return (
    <div>
      <label>
        <h3>Ключевые слова</h3>
        <Input classNames={cn(styles.input)} />
      </label>
    </div>
  );
}
