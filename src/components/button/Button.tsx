import {FC, PropsWithChildren} from 'react';
import styles from './Button.module.css';
type optionsColor = 'orange' | 'white';
type optionsIcon = 'settings' | 'play';

interface Props extends PropsWithChildren {
  icon: optionsIcon;
  backgroundColor: optionsColor;
  onclick: () => void;
}

export const Button = ({backgroundColor, icon, children, onclick}: Props) => {
  return (
    <button className={styles.button + ' ' + styles[backgroundColor]} onClick={onclick}>
      {children}
    </button>
  );
};
