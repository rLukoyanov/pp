import cn from 'classnames';

import styles from './styles.module.scss';

export function Header() {
  const classNames = cn(styles.header);
  return (
    <div className={classNames}>
      <div>search</div>
      <div>logo</div>
    </div>
  );
}
