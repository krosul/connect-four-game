import {ReactComponent as BackgroundWhite} from '../../assets/board-layer-white-large.svg';
import {ReactComponent as BackgroundBlack} from '../../assets/board-layer-black-large.svg';
import {useEffect, useState} from 'react';
import {Card} from './Card';
import styles from './Play.module.css';
type playersI = 'one' | 'two';
let arr = Array.from({length: 42}, (_, i) => ({selectedBy: '', position: i}));
interface DataI {
  selectedBy: string;
  position: number;
}
export const Play = () => {
  const [data, setData] = useState<DataI[]>([]);
  const [turnPlayer, setTurnPlayer] = useState<playersI>('one');
  useEffect(() => {
    setData(arr);
  }, []);
  useEffect(() => {
    isWinner();
  }, [data]);

  const selectData = (i: number, player: number) => {
    const changeData = [...data];
    changeData[i].selectedBy = turnPlayer;
    setData(changeData);
    setTurnPlayer(turnPlayer === 'one' ? 'two' : 'one');
  };
  const isWinner = () => {
    const limitHigher = 42;
    const limitLower = 0;
    let winner = '';
    let selecteds: DataI[] = [];
    data.forEach((dataS) => {
      if (dataS.selectedBy) {
        selecteds.push(dataS);
      }
    });
    console.log(selecteds);
  };
  return (
    <div className={styles.containerAll}>
      <section className={styles.cardPlayer}>
        <h1>Jugador uno</h1>
      </section>
      <BackgroundBlack className={styles['black-background']} />
      <BackgroundWhite className={styles['white-background']} />

      <div className={styles.container}>
        {new Array(7).fill(0).map((col, i) => (
          <button
            // disabled={
            //   gameState[0][i] !== 0 ||
            //   Boolean(isGameEnded) ||
            //   (!isPlayer1Turn && isAgainstCPU)
            // }
            // onMouseEnter={() => setHoveringOver(i)}
            // key={i}
            className={styles.buttons}
            onClick={() => {
              handleOnClick(i);
            }}
          ></button>
        ))}
      </div>
      <section className={styles.cardPlayer}>
        <h1>Jugador uno</h1>
      </section>
    </div>
  );
  function handleOnClick(j: number): any {
    console.log(j);
  }
};
