import {FC} from 'react';
import {ReactComponent as PlayerOneTimer} from '@assets/turn-background-red.svg';
import {ReactComponent as PlayerTwoTimer} from '@assets/turn-background-yellow.svg';

import styles from './Timer.module.css';
interface Props {
  isPlayerOneTurn: boolean;
  timer: number;
}
export const Timer: FC<Props> = ({isPlayerOneTurn, timer}) => {
  const colorBack = isPlayerOneTurn
    ? styles['timer-red']
    : styles['timer-yellow'];
  const playerTurn = isPlayerOneTurn ? '1er' : '2do';
  return (
    <div className={styles['container-timer']}>
      <div className={styles.center}>
        <PlayerOneTimer className={styles['background-black']} />
        <PlayerOneTimer className={`${styles.background} ${colorBack}`} />
        <div className={styles.content}>
          <h6 className={styles.title}>Turno del {playerTurn} jugador</h6>
          <p className={styles.seconds}>{timer}s</p>
        </div>
      </div>
    </div>
  );
};
