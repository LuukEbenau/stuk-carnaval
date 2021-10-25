import logo from './logo.svg';
import './App.css';
import TeamBar from './TeamBar'
import React, {useState} from 'react'
import party from "party-js";

import stukLogo from './stuk.png'
function App() {
  const [redProgress,setRedProgress] = useState(20)
  const [greenProgress,setGreenProgress] = useState(40)
  const [yellowProgress,setYellowProgress] = useState(60)

  const milestones = [
    {progress: 25, label: 'milestone 1'},
    {progress: 45, label: 'milestone 2'},
    {progress: 70, label: 'milestone 3'},
    {progress: 100, label: 'final milestone'}
  ]

  function updateColorProgress(color,value){
    if(color == 'red') setRedProgress(value)
    if(color == 'yellow') setYellowProgress(value)
    if(color == 'green') setGreenProgress(value)

    for(let ms of milestones){
      if(value === ms.progress){
        let confettiConfig = {
          debug: true,
          gravity:100,
          count: 100,
          color: [new party.Color(255,0,0),new party.Color(0,255,0),new party.Color(255,255,0)]
        }
        party.confetti(document.body, confettiConfig);
        console.log("milestone reached")//TODO: what we even want to do... this is just placeholder
      }
    }
  }

  return (
    <div className="App">
      <img src={stukLogo}/>
      <div className='container'>
        <div className='row vh-100'>
          <div className="col-4 h-100">
            <TeamBar color='red' progress={redProgress} milestones={milestones}></TeamBar>
            <div>
              <button onClick={e=>updateColorProgress('red',redProgress+1)}>+1%</button>
            </div>
          </div>
          <div className="col-4">
            <TeamBar color='yellow' progress={yellowProgress} milestones={milestones}></TeamBar>
            <div>
              <button onClick={e=>updateColorProgress('yellow',yellowProgress+1)}>+1%</button>
            </div>
          </div>
          <div className="col-4">
            <TeamBar color='green' progress={greenProgress} milestones={milestones}></TeamBar>
            <div>
              <button onClick={e=>updateColorProgress('green',greenProgress+1)}>+1%</button>
            </div>
          </div>
        </div>    
      </div>
    </div>
  );
}

export default App;
