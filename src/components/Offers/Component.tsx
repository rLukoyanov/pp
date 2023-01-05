import { Select, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Offer } from './Offer';

import styles from './styles.module.scss';

const useStyles = makeStyles(() => ({
  Select: {
    flex: 1,
    background: '#fff',
  },
}));

export function Offers() {
  const selectStyles = useStyles();

  const offers = [
    {
      id: 1,
      title: 'First',
    },
    {
      id: 2,
      title: 'Second',
    },
    {
      id: 3,
      title: 'Third',
    },
    {
      id: 4,
      title: 'Fouth',
    },
    {
      id: 5,
      title: 'Fifth',
    },
    {
      id: 6,
      title: 'Six',
    },
  ];

  return (
    <div>
      <div className={styles.select}>
        <Select className={selectStyles.Select} value={10} variant="outlined">
          <MenuItem value={10}>Вакансии</MenuItem>
          <MenuItem value={20}>Вакансии</MenuItem>
          <MenuItem value={30}>Вакансии</MenuItem>
        </Select>
        <Select className={selectStyles.Select} value={10} variant="outlined">
          <MenuItem value={10}>Специализация</MenuItem>
          <MenuItem value={20}>Специализация</MenuItem>
          <MenuItem value={30}>Специализация</MenuItem>
        </Select>
        <Select className={selectStyles.Select} value={10} variant="outlined">
          <MenuItem value={10}>Опыт работы</MenuItem>
          <MenuItem value={20}>Опыт работы</MenuItem>
          <MenuItem value={30}>Опыт работы</MenuItem>
        </Select>
        <Select className={selectStyles.Select} value={10} variant="outlined">
          <MenuItem value={10}>График работы</MenuItem>
          <MenuItem value={20}>График работы</MenuItem>
          <MenuItem value={30}>График работы</MenuItem>
        </Select>
      </div>
      <ul className={styles.offers}>
        {offers.map((offer) => (
          <Offer id={offer.id} title={offer.title} />
        ))}
      </ul>
    </div>
  );
}
