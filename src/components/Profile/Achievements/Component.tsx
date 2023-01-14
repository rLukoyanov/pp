import plusSVG from '../../../assets/Icon-plus.svg';

import cn from 'classnames';

import { Button } from '../../common/Button';
import { Achieve } from './Achieve';

import styles from './styles.module.scss';
import { useState } from 'react';
import { AddAchieve } from './AddAchieve';

export function Achievements() {
  const [addAchieveOpen, setAddAchieveOpen] = useState(false);
  const addAchieve = () => {
    setAddAchieveOpen((prev) => !prev);
  };
  const closeAchieve = () => {
    setAddAchieveOpen(false);
  };

  return (
    <div className={cn(styles.achievements)}>
      {addAchieveOpen && <AddAchieve onClick={closeAchieve} />}
      <div className={cn(styles.title)}>
        <h1>Достижения</h1>
        <Button onClick={addAchieve} type="outline">
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
