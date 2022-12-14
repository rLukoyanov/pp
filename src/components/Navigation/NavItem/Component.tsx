import cn from 'classnames';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

type NavItemProps = {
  children: React.ReactNode;
  active: boolean;
  icon: string;
  url: string;
};

export function NavItem({
  children,
  active = false,
  icon = '',
  url = '/',
}: NavItemProps) {
  const classNames = cn(styles['nav-item'], { [styles.active]: active });

  const changeActive = () => {};

  return (
    <Link style={{ textDecoration: 'none', color: 'black' }} to={url}>
      <div className={classNames}>
        <img src={icon} />
        <span onClick={changeActive}>{children}</span>
      </div>
    </Link>
  );
}
