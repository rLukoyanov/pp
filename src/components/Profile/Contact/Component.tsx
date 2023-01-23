import styles from './styles.module.scss';

type ContactProps = {
  title: string | undefined;
  text: string | undefined;
};

export function Contact({ title, text }: ContactProps) {
  return (
    <div className={styles.contact}>
      <h4>{title}</h4>
      <div>{text}</div>
    </div>
  );
}
