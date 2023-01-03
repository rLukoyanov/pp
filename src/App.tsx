import { Header } from './components/Header';
import { NavList } from './components/Navigation/NavList';

import './App.scss';

function App({ children = <></> }) {
  return (
    <div>
      <Header />
      <div className="main">
        <NavList />
        {children}
      </div>
    </div>
  );
}

export default App;
