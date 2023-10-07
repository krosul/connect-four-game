import {useState} from 'react';
import styles from './App.module.css';
import {Button} from './components/button/Button';
import {Rules} from './components/rules/Rules';
import {Play} from './components/Play/Play';
import {ReactComponent as Logo} from './assets/logo.svg';
import {ReactComponent as PlayerCPU} from './assets/player-vs-cpu.svg';
import {ReactComponent as PlayesVsPlayer} from './assets/player-vs-player.svg';
type optionsMenu = 'play' | 'rules' | '';

function App() {
  const [optionSelected, setOptionSelected] = useState<optionsMenu>('');
  const [isAgaintsCPU, setIsAgaintsCPU] = useState(false);

  const clickToPlay = (vsCPU?: boolean) => {
    if (vsCPU) setIsAgaintsCPU(true);

    setOptionSelected('play');
  };
  const clickToSettings = () => {
    setOptionSelected('rules');
  };
  const clickToMenu = () => {
    setOptionSelected('');
  };
  const selectedOptions = {
    rules: <Rules goToMenu={clickToMenu} />,
    play: <Play clickToMenu={clickToMenu} />,
    '': '',
  };
  return (
    <div className={styles.center}>
      {!selectedOptions[optionSelected] && (
        <div className={styles.container}>
          <Logo />
          <div className={styles.div}>
            <Button backgroundColor="orange" onclick={() => clickToPlay(true)}>
              Jugador vs CPU
              <PlayerCPU />
            </Button>
            <Button backgroundColor="yellow" onclick={clickToPlay}>
              Jugador vs Jugador
              <PlayesVsPlayer />
            </Button>
            <Button backgroundColor={'white'} onclick={clickToSettings}>
              Reglas del juego
            </Button>
          </div>
        </div>
      )}
      {selectedOptions[optionSelected] && selectedOptions[optionSelected]}
    </div>
  );
}

export default App;
