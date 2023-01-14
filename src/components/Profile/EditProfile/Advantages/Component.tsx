import cn from 'classnames';
import { Advantage } from '../../../common/Advantage';

import { Input } from '../../../common/Input';

import styles from './styles.module.scss';

export function Advandages() {
  return (
    <div>
      <label>
        <h3>Ключевые слова</h3>
        <div className={cn(styles.advantages)}>
          <Advantage>Workflow</Advantage>
          <Advantage>Illustrator</Advantage>
          <Advantage>Figma</Advantage>
        </div>

        <Input classNames={cn(styles.input)} />
      </label>
    </div>
  );
}
