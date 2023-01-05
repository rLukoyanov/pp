import { Link } from 'react-router-dom';
import { Button } from '../../common/Button';

import CompanySVG from '../../../assets/image1.svg';

import styles from './styles.module.scss';

type OfferProps = {
  id: number;
  title: string;
};

export function Offer({ id = 0, title = '' }: OfferProps) {
  return (
    <div className={styles.offer}>
      <div className={styles.header}>
        <img src={CompanySVG} />
        <span>от 45 000 руб</span>
      </div>
      <h2>{title}</h2>
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
      <Link to={id.toString()}>
        <Button>Подробнее</Button>
      </Link>
    </div>
  );
}
