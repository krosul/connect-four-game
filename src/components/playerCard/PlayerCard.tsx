import {FC} from 'react';
import {ReactComponent as CPUIcon} from '../../assets/cpu.svg';
import {ReactComponent as PlayerOneIcon} from '../../assets/player-one.svg';
import {ReactComponent as PlayerTwoIcon} from '../../assets/player-two.svg';

import styles from './PlayerCard.module.css';

interface Props {
  isForPlayerOne: boolean;
  isAgaintsCPU: boolean;
}

export const PlayerCard: FC<Props> = ({isAgaintsCPU, isForPlayerOne}) => {
  const player = isAgaintsCPU
    ? 'CPU'
    : isForPlayerOne
    ? 'Jugador Uno'
    : 'Jugador Dos';
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{getIcon(isForPlayerOne, isAgaintsCPU)}</div>
      <h2 className={styles.title}>{player} </h2>
      <p className={styles.num}>0</p>
    </div>
  );
};
const getIcon = (isForPlayerOne: boolean, isAgaintsCPU: boolean) => {
  if (isAgaintsCPU && !isForPlayerOne) {
    return <CPUIcon />;
  } else if (isForPlayerOne) {
    return <PlayerOneIcon />;
  } else {
    return <PlayerTwoIcon />;
  }
};
