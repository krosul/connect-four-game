import styles from './Card.module.css';

interface prop {
  // data?: {selectedBy: string; position: number};
  // select?: (i: number, player: number) => void;
}
export const Card = () =>
  // {data, select}: prop
  {
    // const option = styles[data.selectedBy] || ' ';
    return (
      <div
        className={
          styles.item + ' '
          // + option
        }
        // onClick={() =>
        //   select(data.position, 2)}
      ></div>
    );
  };
