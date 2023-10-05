import {ReactComponent as MarkerRed} from '../../assets/marker-red.svg';
import {ReactComponent as MarkerYellow} from '../../assets/marker-yellow.svg';

import styles from './Marker.module.css';

function Marker({isPlayerOneTurn, hoverTo}: MarkerProps) {
  console.log(hoverTo);

  return (
    <div
      className={styles.container}
      style={{transform: `translateX(${90.5 * hoverTo}px)`}}
    >
      {isPlayerOneTurn ? <MarkerRed /> : <MarkerYellow />}
    </div>
  );
}

type MarkerProps = {
  isPlayerOneTurn: boolean;
  hoverTo: number;
};
export default Marker;
//84.8
