import {ReactComponent as BackgroundWhite} from '../../assets/board-layer-white-large.svg';
import {ReactComponent as BackgroundBlack} from '../../assets/board-layer-black-large.svg';
import {useEffect, useState} from 'react';
import styles from './Play.module.css';
import PlayBoard from '../Board/PlayBoard';
import {ithAvailable, makeMove} from '../../utils';
import Marker from '../marker/Marker';
import {PlayerCard} from '../playerCard/PlayerCard';
import Menu from '../Menu/Menu';

const NEWGAME: number[][] = new Array(6).fill(new Array(7).fill(0));

export const Play = () => {
  const [gameState, setGameState] = useState(NEWGAME);
  const [playerOneTurn, setPlayerOneTurn] = useState(true);
  const [hoverTo, setHoverTo] = useState(0);
  return (
    <>
      <Menu />
      <div className={styles.containerAll}>
        <PlayerCard isForPlayerOne={true} isAgaintsCPU={false} />
        <BackgroundBlack className={styles['black-background']} />
        <BackgroundWhite className={styles['white-background']} />
        <div className={styles.container}>
          <Marker isPlayerOneTurn={playerOneTurn} hoverTo={hoverTo} />
          <PlayBoard gameState={gameState} />
          {new Array(7).fill(0).map((col, i) => (
            <button
              // disabled={
              //   gameState[0][i] !== 0 ||
              //   Boolean(isGameEnded) ||
              //   (!isPlayer1Turn && isAgainstCPU)
              // }
              onMouseEnter={() => setHoverTo(i)}
              // key={i}
              className={styles.buttons}
              onClick={() => {
                handleOnClick(i);
              }}
            ></button>
          ))}
        </div>
        <PlayerCard isForPlayerOne={false} isAgaintsCPU={false} />
      </div>
    </>
  );
  function handleOnClick(j: number) {
    console.log(j);
    let i = ithAvailable(gameState, j) as number;
    const [newGameState] = makeMove(gameState, playerOneTurn, i, j);
    setGameState(newGameState);
    getTurn();
  }
  function getTurn(): void {
    setPlayerOneTurn(!playerOneTurn);
  }
};
