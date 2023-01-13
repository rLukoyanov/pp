import cn from 'classnames';
import { Button } from '../../../common/Button';
import { Input } from '../../../common/Input';
import { TextArea } from '../../../common/TextArea';

import crossSVG from './cross.svg';

import styles from './styles.module.scss';

export function AddCard({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={cn(styles.header)}>
          <h2>Опыт работы</h2>

          <button className={cn(styles.button)} onClick={onClick}>
            <img src={crossSVG} alt="close button" />
          </button>
        </div>

        <label>
          <h3>Должность</h3>
          <Input classNames={styles.input} />
        </label>
        <label>
          <h3>Место работы</h3>
          <Input classNames={styles.input} />
        </label>
        <label>
          <h3>Детали</h3>
          <TextArea />
        </label>
        <br />
        <Button>Разместить</Button>
      </div>
    </div>
  );
}
