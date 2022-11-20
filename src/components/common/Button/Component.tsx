import cn from 'classnames';

import styles from './styles.module.scss';

export function Button({
  children = '',
  className = '',
  disabled = false,
  type = '',
}) {
  const classNames = cn(styles.button, {
    [styles.outline]: type === 'outline',
  });

  return (
    <button className={`${classNames} ${className}`} disabled={disabled}>
      {children}
    </button>
  );
}
