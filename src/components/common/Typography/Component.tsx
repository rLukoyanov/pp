import styles from './styles.module.scss';

export function Input({ href = '', children = <></> }) {
  return (
    <a href={href} className={styles.link}>
      {children}
    </a>
  );
}
