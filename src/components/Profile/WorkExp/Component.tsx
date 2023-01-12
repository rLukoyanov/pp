import plusSVG from '../../../assets/Icon-plus.svg';

import { Button } from '../../common/Button';

import styles from './styles.module.scss';
import { Card } from './Card';
import { useState } from 'react';
import { AddCard } from './AddCard';

export function WorkExp() {
  const text = `Полная реализация сайта и сайта администраторов.
  - Адаптивная верстка.
  - Работа с WordPress
  - Работа с RestAPI
  - Реализация ssr на Next.js
  - Реализация проксирования
  
  Стек:
  - ReactJS
  - Next.js
  - Axios
  - date-fns
  - antd
  - sass`;

  const [addCardOpen, setAddCardOpen] = useState(false);
  const addCard = () => {
    setAddCardOpen((prev) => !prev);
  };
  const closeCard = () => {
    setAddCardOpen(false);
  };

  return (
    <div className={styles.workExp}>
      {addCardOpen && <AddCard onClick={closeCard} />}
      <div className={styles.title}>
        <h1>Опыт работы</h1>
        <Button onClick={addCard} type="outline">
          <img src={plusSVG} alt="buttonImg" />
        </Button>
      </div>
      <Card
        time="Cентябрь 2020 - Май 2021"
        title="React developer"
        content={text}
      />
    </div>
  );
}
