import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { NavList } from '../components/Navigation/NavList';

import homeSVG from '../images/navigation/Icon-home.svg';
import responseSVG from '../images/navigation/Icon-response.svg';
import jobOffetsSVG from '../images/navigation/Icon-job-offers.svg';
import profileSVG from '../images/navigation/Icon-profile.svg';
import exitSVG from '../images/navigation/Icon-exit.svg';

export default function MainPage() {
  const [navItems, setNavItems] = useState<{ text: string; icon: string; active: boolean }[]>([]);

  useEffect(() => {
    setNavItems([
      { text: 'Главная', icon: homeSVG, active: true },
      { text: 'Отклики', icon: responseSVG, active: false },
      { text: 'Вакансии', icon: jobOffetsSVG, active: false },
      { text: 'Профиль', icon: profileSVG, active: false },
      { text: 'Выход', icon: exitSVG, active: false },
    ]);
  }, []);
  return (
    <div>
      <Link to="/login">login</Link>
      <Header />
      <NavList navItems={navItems} />
    </div>
  );
}
