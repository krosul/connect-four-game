import {FC, PropsWithChildren} from 'react';
import styles from './Button.module.css';
type optionsColor = 'orange' | 'white' | 'yellow';

interface Props extends PropsWithChildren {
  backgroundColor: optionsColor;
  onclick: () => void;
}

export const Button = ({backgroundColor, children, onclick}: Props) => {
  return (
    <button
      className={styles.button + ' ' + styles[backgroundColor]}
      onClick={onclick}
    >
      {children}
    </button>
  );
};
