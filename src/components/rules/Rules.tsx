import {FC} from 'react';
import styles from './Rules.module.css';
import {ReactComponent as IconCheck} from '@assets/icon-check.svg';
interface Props {
  goToMenu: () => void;
}

export const Rules: FC<Props> = ({goToMenu}) => {
  return (
    <div className={styles['container-rules-section']}>
      <h1 className={styles.title}>Reglas</h1>
      <h2 className={styles['sub-title']}>Objetivo</h2>
      <span>
        Sé el primer jugador en conectar 4 discos del mismo color en fila (ya
        sea vertical, horizontal o diagonalmente).
      </span>
      <h2 className={styles['sub-title']}>Como jugar</h2>
      <ol>
        <li>El rojo va primero en la primera partida.</li>
        <li>
          Los jugadores deben alternar los turnos, y sólo se puede lanzar un
          disco en cada turno.
        </li>
        <li>La partida termina cuando se consigue un 4 en raya o un empate.</li>
        <li>
          El jugador que empezó la partida anterior pasa a ser el segundo en la
          siguiente.
        </li>
      </ol>
      <IconCheck onClick={goToMenu} />
    </div>
  );
};
