import cn from 'classnames';

import { NavItem } from '../NavItem';

import styles from './styles.module.scss';

type NavListProps = {
  navItems: { icon: string; text: string, active: boolean }[];
};

export function NavList({ navItems = [] }: NavListProps) {
  const classNames = cn(styles['nav-list']);
  return (
    <ul className={classNames}>
      {navItems.map((item) => (
        <NavItem active={item.active} icon={item.icon}>{item.text}</NavItem>
      ))}
    </ul>
  );
}
