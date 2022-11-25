import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NavList } from '../components/Navigation/NavList';
// import Typography from '../components/common/Typography';

export default function MainPage() {
  const [navItems, setNavItems] = useState<string[]>([]);

  useEffect(() => {
    setNavItems(['Главная', 'Отклики', 'Вакансии', 'Профиль', 'Выход']);
  }, []);
  return (
    <div>
      <Link to="/">Home</Link>
      <NavList navItems={navItems} />
    </div>
  );
}
