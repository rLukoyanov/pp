import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './styles.module.scss';

export function Advantage({
  children,
  last = false,
  top = false,
  left = false,
  color = false,
}: {
  children: ReactNode;
  last?: boolean;
  top?: boolean;
  left?: boolean;
  color?: boolean;
}) {
  return (
    <div
      className={classNames(styles.advantage, {
        [styles.last]: last,
        [styles.top]: top,
        [styles.left]: left,
        [styles.color]: color,
      })}
    >
      {children}
    </div>
  );
}
