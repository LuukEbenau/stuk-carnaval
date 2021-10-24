import logo from './logo.svg';
import './App.css';
import TeamBar from './TeamBar'
function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='row vh-100'>
          <div className="col-4 h-100">
            <TeamBar color='red'></TeamBar>
          </div>
          <div className="col-4">
            <TeamBar color='yellow'></TeamBar>
          </div>
          <div className="col-4">
            <TeamBar color='green'></TeamBar>
          </div>
        </div>    
      </div>
    </div>
  );
}

export default App;
