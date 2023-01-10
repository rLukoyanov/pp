import { Link } from 'react-router-dom';
import { Button } from '../../common/Button';

import CompanySVG from '../../../assets/image1.svg';

import styles from './styles.module.scss';
import { Advantage } from '../../common/Advantage';

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
        <Advantage>Без опыта</Advantage>
        <Advantage>Сменный график</Advantage>
        <Advantage last>Полная занятость</Advantage>
      </div>
      <div className="body-sm" style={{ flex: 1 }}>
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
