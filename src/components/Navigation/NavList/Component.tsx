import { useState } from 'react';

import cn from 'classnames';

import { NavItem } from '../NavItem';

import styles from './styles.module.scss';

export function NavList({ navItems = [] }) {
  const classNames = cn(styles['nav-item']);
  return (
    <ul className={classNames}>
      {navItems.map((item) => (
        <NavItem>test</NavItem>
      ))}
    </ul>
  );
}
