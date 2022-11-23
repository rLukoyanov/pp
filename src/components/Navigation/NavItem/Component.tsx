import { useState } from 'react';

import cn from 'classnames';

import styles from './styles.module.scss';

export function NavItem({ children = '', active = false, icon = <></> }) {
  const classNames = cn(styles['nav-item'], { [styles.active]: active });
  return (
    <div className={classNames}>
      {icon}
      {children}
    </div>
  );
}
