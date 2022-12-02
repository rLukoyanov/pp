import cn from 'classnames';
import React from 'react';

import styles from './styles.module.scss';

type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: string;
};

export function Button({
  children,
  className = '',
  disabled = false,
  type = '',
}: ButtonProps) {
  const classNames = cn(styles.button, {
    [styles.outline]: type === 'outline',
  });

  return (
    <button className={`${classNames} ${className}`} disabled={disabled}>
      {children}
    </button>
  );
}
