import cn from 'classnames';

import styles from './styles.module.scss';

export function NavItem({ children = '', active = false, icon = '' }) {
  const classNames = cn(styles['nav-item'], { [styles.active]: active });
  return (
    <div className={classNames}>
      <img src={icon} />
      {children}
    </div>
  );
}
