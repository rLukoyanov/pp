import cn from 'classnames';
import { useLocation } from 'react-router-dom';

import { NavItem } from '../NavItem';

import homeSVG from '../../../images/navigation/Icon-home.svg';
import responseSVG from '../../../images/navigation/Icon-response.svg';
import jobOffetsSVG from '../../../images/navigation/Icon-job-offers.svg';
import profileSVG from '../../../images/navigation/Icon-profile.svg';
import exitSVG from '../../../images/navigation/Icon-exit.svg';

import styles from './styles.module.scss';

export function NavList() {
  const classNames = cn(styles['nav-list']);

  const navButtons: {
    text: string;
    icon: string;
    active: boolean;
    url: string;
  }[] = [
    { text: 'Главная', icon: homeSVG, active: true, url: '/' },
    { text: 'Отклики', icon: responseSVG, active: false, url: '/responses' },
    { text: 'Вакансии', icon: jobOffetsSVG, active: false, url: '/offers' },
    { text: 'Профиль', icon: profileSVG, active: false, url: '/profile' },
    { text: 'Выход', icon: exitSVG, active: false, url: '/exit' },
  ];
  navButtons.forEach((item) => {
    if (useLocation().pathname === item.url) {
      item.active = true;
    } else {
      item.active = false;
    }
  });

  return (
    <ul className={classNames}>
      {navButtons.map((item) => (
        <NavItem
          key={item.url}
          active={item.active}
          icon={item.icon}
          url={item.url}
        >
          {item.text}
        </NavItem>
      ))}
    </ul>
  );
}
