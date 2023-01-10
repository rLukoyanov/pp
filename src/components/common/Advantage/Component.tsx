import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './styles.module.scss';

export function Advantage({
  children,
  last = false,
}: {
  children: ReactNode;
  last?: boolean;
}) {
  return (
    <div className={classNames(styles.advantage, { [styles.last]: last })}>
      {children}
    </div>
  );
}
