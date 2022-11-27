import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { NavList } from '../components/Navigation/NavList';
// import Typography from '../components/common/Typography';

export default function MainPage() {
  const [navItems, setNavItems] = useState<string[]>([]);

  useEffect(() => {
    setNavItems(['Главная', 'Отклики', 'Вакансии', 'Профиль', 'Выход']);
  }, []);
  return (
    <div>
      <Link to="/login">login</Link>
      <Header />
      <NavList navItems={navItems} />
    </div>
  );
}
