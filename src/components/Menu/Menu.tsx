import {FC} from 'react';
import {ReactComponent as Logo} from '../../assets/logo.svg';

import styles from './Menu.module.css';

interface Props {
  reset: () => void;
  clickToMenu: () => void;
}

export const Menu: FC<Props> = ({reset, clickToMenu}) => {
  return (
    <div className={styles['container-menu']}>
      <button onClick={clickToMenu}>Menu</button>
      <Logo />
      <button onClick={reset}>Reiniciar</button>
    </div>
  );
};
