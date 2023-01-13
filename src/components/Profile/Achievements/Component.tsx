import plusSVG from '../../../assets/Icon-plus.svg';

import cn from 'classnames';

import { Button } from '../../common/Button';
import { Achieve } from './Achieve';

import styles from './styles.module.scss';

export function Achievements() {
  return (
    <div className={cn(styles.achievements)}>
      <div className={cn(styles.title)}>
        <h1>Достижения</h1>
        <Button type="outline">
          <img src={plusSVG} alt="buttonImg" />
        </Button>
      </div>

      <div className={cn(styles.content)}>
        <Achieve />
        <Achieve />
        <Achieve />
        <Achieve />
        <Achieve />
        <Achieve />
      </div>
    </div>
  );
}
