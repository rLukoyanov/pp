import cn from 'classnames';

import { NavItem } from '../NavItem';

import styles from './styles.module.scss';

type NavListProps = {
  navItems: string[];
};

export function NavList({ navItems = [] }: NavListProps) {
  const classNames = cn(styles['nav-item']);
  return (
    <ul className={classNames}>
      {navItems.map((item) => (
        <NavItem>{item}</NavItem>
      ))}
    </ul>
  );
}
