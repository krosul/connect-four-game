import {ReactComponent as CounterRed} from '../../assets/counter-red-large.svg';
import {ReactComponent as CounterYellow} from '../../assets/counter-yellow-large.svg';

import styles from './PlayBoard.module.css';
const PlayBoard = ({gameState}: FillBoardProps) => {
  return (
    <div className={styles.container}>
      {gameState.map((row, i) =>
        row.map((cell, j) =>
          cell === 1 ? (
            <div className={styles['container-cell']} key={`${i},${j}`}>
              <CounterRed />
              {/* {inFocusedDiscs(i, j) && (
                <div className="absolute animate-fade-in  inset-0 m-auto -top-1 border-[6px] rounded-full border-white w-5 h-5 tablet:w-8 tablet:h-8"></div>
              )} */}
            </div>
          ) : cell === -1 ? (
            <div className={styles['container-cell']} key={`${i},${j}`}>
              <CounterYellow />
              {/* {inFocusedDiscs(i, j) && (
                <div className="absolute animate-fade-in  inset-0 m-auto -top-1 border-[6px] rounded-full border-white w-8 h-8"></div>
              )}{" "} */}
            </div>
          ) : (
            <div key={`${i},${j}`}></div>
          )
        )
      )}
    </div>
  );
};
type FillBoardProps = {
  gameState: number[][];
  // focusedDiscs: number[][];
};
export default PlayBoard;
