import cn from 'classnames';

import diplomPNG from './diplom.png';
import editSVG from './Icon-edit.svg';
import deleteSVG from './Icon-delete.svg';

import styles from './styles.module.scss';

export function Achieve() {
  return (
    <div className={cn(styles.achieve)}>
      <img src={diplomPNG} />
      <div className={cn(styles.content)}>
        Диплом призера муниципального этапа всероссийской олимпида школьников по
        оществознанию среди 8 классов 2019 года.
      </div>
      <div className={cn(styles.buttons)}>
        <div>
          <img src={editSVG} />
        </div>
        <div>
          <img src={deleteSVG} />
        </div>
      </div>
    </div>
  );
}
