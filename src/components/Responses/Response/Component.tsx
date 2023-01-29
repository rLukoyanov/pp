import { Link } from 'react-router-dom';
import cn from 'classnames';

import companyLogoSVG from '../../../assets/image1.svg';

import styles from './styles.module.scss';

type ResponseProps = {
  status: string;
};

export function Response({ status = 'unviwed' }: ResponseProps) {
  let statusText = '';

  switch (status) {
    case 'unviwed':
      statusText = 'Не просмотрено';
      break;
    case 'invite':
      statusText = 'Приглашение';
      break;
    case 'viwed':
      statusText = 'Просмотрено';
      break;
  }

  const classNames = cn(styles.status, {
    [styles.invite]: status === 'invite',
    [styles.waiting]: status === 'unviwed',
    [styles.checked]: status === 'viwed',
  });

  return (
    <div className={styles.response}>
      <img src={companyLogoSVG} />
      <h3>Курьер</h3>
      <div className={styles.info}>
        <span>
          <Link to="/"> Мэйджор Экспресс</Link>
        </span>
        <svg
          width="4"
          height="4"
          viewBox="0 0 4 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="2" cy="2" r="2" fill="black" />
        </svg>
        <span className={styles.place}>Нижнекамск</span>
      </div>
      <div className={classNames}>{statusText}</div>
    </div>
  );
}
