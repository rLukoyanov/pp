import { Header } from './components/Header';
import { NavList } from './components/Navigation/NavList';
import MainPage from './routes/MainPage';

function App() {
  return (
    <div className="App">
      <Header />
      <NavList />
      <MainPage />
    </div>
  );
}

export default App;
