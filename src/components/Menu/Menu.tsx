import {ReactComponent as Logo} from '../../assets/logo.svg';

import styles from './Menu.module.css';

export default function Menu() {
  return (
    <div className={styles['container-menu']}>
      <button>Menu</button>
      <Logo />
      <button>Reiniciar</button>
    </div>
  );
}
