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
  const [navItems, setNavItems] = useState<{ text: string; icon: string }[]>(
    [],
  );

  useEffect(() => {
    setNavItems([
      { text: 'Главная', icon: homeSVG },
      { text: 'Отклики', icon: responseSVG },
      { text: 'Вакансии', icon: jobOffetsSVG },
      { text: 'Профиль', icon: profileSVG },
      { text: 'Выход', icon: exitSVG },
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
