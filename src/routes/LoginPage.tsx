import { Link } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { Input } from '../components/common/Input';
// import Typography from '../components/common/Typography';

export default function LoginPage() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Input label="Электронная почта" placeholder="Введите e-mail" />
      <Input label="Пароль" placeholder="Пароль" />
      <Button>Button</Button>
    </div>
  );
}
