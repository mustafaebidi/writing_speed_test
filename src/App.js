import { Fragment, useRef, useState } from 'react';

import Timer from "./components/Timer/timer"
import Level from "./components/level/Level"
import Score from './components/score/score';
import Left from './components/left/left';
import Right from './components/right/right';
import StartWindow from './components/startwindow/startwindow';
import WordForm from './components/wordform/WordForm';
import Category from './components/categeoy/category';
import ContainerGame from './components/containergame/containergame';
import SelectedWords from './components/selectedwords/selectedwords';
import GameOver from './components/gameover/gameover';
import Win from './components/win/win';


function App() {

  const [level, setLevel] = useState("Normal")
  const[challenge,setChallenge]=useState("")
  
  return (
    <Fragment>
      <ContainerGame>
        <Right>
          {(challenge === "lose") ? <GameOver/> :(challenge === "win") ?  <Win/>:"" }
          <StartWindow/>
          <WordForm/>
          <SelectedWords  />
        </Right>

        <Left>
          <Score/>
          <Timer level={level} setChallenge={setChallenge} />
          <Level setLevel={setLevel} level={level} />   
        </Left>

      </ContainerGame>
      <Category/>
      
    </Fragment>
  );
}

export default App;
