import styles from './styles.module.scss';

export function Button({
  children = '',
  className = '',
  disabled = false,
  type = '',
}) {
  let buttonStyles = styles.button;
  if (type === 'outline') {
    buttonStyles = buttonStyles + ' ' + styles.outline;
  }
  return (
    <button className={`${buttonStyles} ${className}`} disabled={disabled}>
      {children}
    </button>
  );
}
