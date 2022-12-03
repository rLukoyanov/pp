import { Header } from './components/Header';
import { NavList } from './components/Navigation/NavList';
import MainPage from './routes/MainPage';

import './App.scss';

function App() {
  return (
    <div>
      <Header />
      <div className="main">
        <NavList />
        <MainPage />
      </div>
    </div>
  );
}

export default App;
