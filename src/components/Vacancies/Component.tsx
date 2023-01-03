import { Link } from 'react-router-dom';
import { Button } from '../common/Button';

import styles from './styles.module.scss';

export function Vacancies() {
  return (
    <div className={styles.offer}>
      <div className={styles.header}>от 45 000 руб</div>
      <h2>Сборщик-грузчик</h2>
      <div className={styles.advantages}>
        <span>Без опыта</span>
        <span>Сменный график</span>
        <span>Полная занятость</span>
      </div>
      <div className="body-sm">
        В обязанности входят: внутрискладская переработка грузов ( разбор
        заказов по маршрутам доставки), а так же сортировка, укладка, перенос
        товара и т.д.
      </div>
      <Link to="vacancies">
        <Button>Подробнее</Button>
      </Link>
    </div>
  );
}
