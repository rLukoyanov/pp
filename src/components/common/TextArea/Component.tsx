import styles from './styles.module.scss';

import classNames from 'classnames';

export function TextArea({ status = 'default', disabled = false }) {
  const inputStyles = classNames(styles.textarea, {
    [styles.outline]: status === 'default',
    [styles.error]: status === 'error',
    [styles.success]: status === 'success',
    [styles.disabled]: status === 'disabled',
  });

  return (
    <textarea
      className={inputStyles}
      placeholder="placeholder"
      disabled={disabled}
    />
  );
}
