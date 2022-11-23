import { Input } from './components/common/Input';
import { TextArea } from './components/common/TextArea';
import { Button } from './components/common/Button';

import { Link } from 'react-router-dom';

import styles from './App.module.scss';
import { NavItem } from './components/Navigation/NavItem';
import { NavList } from './components/Navigation/NavList';

function App() {
  return (
    <div className="App">
      <Link to="/login">Login page</Link>
      <h1>Test</h1>
      <h2>Test</h2>
      <h3>Test</h3>
      <h4>Test</h4>
      <h5>Test</h5>
      <div className={styles.bodySm}>Test</div>
      <div className={styles.bodyXs}>Test</div>
      <div className={`${styles.block} ${styles.elevetion2}`}></div>
      <div className={`${styles.block} ${styles.elevetion4}`}></div>
      <div className={`${styles.block} ${styles.elevetion8}`}></div>
      <div className={`${styles.block} ${styles.elevetion16}`}></div>
      <div className={`${styles.block} ${styles.elevetion24}`}></div>
      <Input status="default" leftIcon />
      <Input status="default" rightIcon />
      <Input status="default" leftIcon rightIcon />
      <Input status="error" />
      <Input status="success" />
      <Input status="success" disabled />
      <TextArea />
      <TextArea status="default" />
      <TextArea status="error" />
      <TextArea status="success" />
      <TextArea disabled />
      <Button>Test</Button>
      <Button disabled>Test</Button>
      <Button type="outline">Test</Button>
      <Button type="outline" disabled>
        Test
      </Button>
      {/* <NavList navItems={[]} /> */}
    </div>
  );
}

export default App;
