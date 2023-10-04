import {useState} from 'react';
import styles from './App.module.css';
import {Button} from './components/button/Button';
import {Rules} from './components/rules/Rules';
import {Play} from './components/Play/Play';
import {ReactComponent as Logo} from './assets/logo.svg';
type optionsMenu = 'play' | 'rules' | '';

function App() {
  const [optionSelected, setOptionSelected] = useState<optionsMenu>('');
  const clickToPlay = () => {
    setOptionSelected('play');
  };
  const clickToSettings = () => {
    setOptionSelected('rules');
  };
  const clickToMenu = () => {
    setOptionSelected('');
  };
  const selectedOptions = {
    rules: <Rules />,
    play: <Play />,
    '': '',
  };
  return (
    <div className={styles.center}>
      {!selectedOptions[optionSelected] && (
        <div className={styles.container}>
          <Logo />
          <div className={styles.div}>
            <Button icon={'play'} backgroundColor={'orange'} onclick={clickToPlay}>
              Jugar
            </Button>
            <Button icon={'settings'} backgroundColor={'white'} onclick={clickToSettings}>
              Configuracion
            </Button>
          </div>
        </div>
      )}
      {selectedOptions[optionSelected] && selectedOptions[optionSelected]}
    </div>
  );
}

export default App;
