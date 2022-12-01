import { Header } from '../components/Header';
import { NavList } from '../components/Navigation/NavList';

export default function ErrorPage() {
  return (
    <div>
      <Header />
      <NavList />
      <span>Page not found</span>
    </div>
  );
}
