import cn from 'classnames';

import { Button } from '../../../common/Button';
import { TextArea } from '../../../common/TextArea';

import crossSVG from './cross.svg';

import styles from './styles.module.scss';

export function AddAchieve({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <div className={cn(styles.addAchieve)}>
      <div className={cn(styles.content)}>
        <div className={cn(styles.header)}>
          <h2>Краткое описание достижения</h2>

          <button className={cn(styles.close)} onClick={onClick}>
            <img src={crossSVG} alt="close button" />
          </button>
        </div>

        <TextArea />
        <br />
        <Button className={cn(styles.upload)}>Загрузить фото</Button>
        <Button className={cn(styles.done)}>Разместить</Button>
      </div>
    </div>
  );
}
