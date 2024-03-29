import styles from './styles.module.scss';

import cn from 'classnames';

type TextAreaProps = {
  status?: string;
  disabled?: boolean;
  placeholder?: string;
};

export function TextArea({
  status = 'default',
  disabled = false,
  placeholder = '',
}: TextAreaProps) {
  const classNames = cn(styles.textarea, {
    [styles.outline]: status === 'default',
    [styles.error]: status === 'error',
    [styles.success]: status === 'success',
    [styles.disabled]: status === 'disabled',
  });

  return (
    <textarea
      className={classNames}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
}
