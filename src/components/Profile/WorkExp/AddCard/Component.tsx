import { Input } from '../../../common/Input';
import { TextArea } from '../../../common/TextArea';
import styles from './styles.module.scss';

export function AddCard({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <button onClick={onClick}>close</button>
        <h2>Опыт работы</h2>

        <label>
          <h3>Должность</h3>
          <Input classNames={styles.input} />
        </label>
        <label>
          <h3>Место работы</h3>
          <Input classNames={styles.input} />
        </label>
        <label>
          <h3>Детали</h3>
          <TextArea />
        </label>
      </div>
    </div>
  );
}
