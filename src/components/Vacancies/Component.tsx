import { Link } from 'react-router-dom';
import { Button } from '../common/Button';

import styles from './styles.module.scss';

export function Vacancies() {
  return (
    <Link to="vacancies">
      <div className={styles.header}>от 45 000 руб</div>
      <h2>Сборщик-грузчик</h2>
      <div>Без опыта Сменный график Полная занятость</div>
      <div>
        В обязанности входят: внутрискладская переработка грузов ( разбор
        заказов по маршрутам доставки), а так же сортировка, укладка, перенос
        товара и т.д.
      </div>
      <Button>Подробнее</Button>
    </Link>
  );
}
