import React, { useState } from 'react';

import cn from 'classnames';

import InputArrow from '../../../images/input/inputArrow.svg';
import InputDownArrow from '../../../images/input/inputDownArrow.svg';

import styles from './styles.module.scss';

type InputProps = {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  status?: string;
  disabled?: boolean;
  leftIcon?: boolean;
  rightIcon?: boolean;
  hint?: boolean;
  label?: string;
  placeholder?: string;
  preIcon?: string;
  width?: string;
};

export function Input({
  onChange = () => {},
  status = 'default',
  disabled = false,
  leftIcon = false,
  rightIcon = false,
  hint = false,
  label = '',
  placeholder = '',
  preIcon = InputArrow,
}: InputProps) {
  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);
  const classNamesStatus = cn(styles.outline, {
    [styles.error]: status === 'error',
    [styles.success]: status === 'success',
  });

  const classNamesInput = cn(styles.input, {
    [styles.left]: leftIcon,
    [styles.right]: rightIcon,
  });

  return (
    <div className={styles['input-container']}>
      <div className={styles.label}>{label}</div>
      <div
        data-testid="input"
        className={cn(classNamesStatus, { [styles.focused]: focused })}
      >
        {leftIcon ? <img src={preIcon} /> : <></>}
        <input
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          className={classNamesInput}
          placeholder={placeholder}
          type="text"
          disabled={disabled}
        />
        {rightIcon ? <img alt="inputDownArrow" src={InputDownArrow} /> : <></>}
      </div>
      {hint ?? <div className={styles.hint}>hint text</div>}
    </div>
  );
}
