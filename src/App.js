import './App.css';
import Player from './components/Player';
import TimeChallenge from './components/TimeChallenge';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimeChallenge title={'Easy'} targetTime={1} />
        <TimeChallenge title={'Not Easy'} targetTime={5} />
        <TimeChallenge title={'Getting tough'} targetTime={10} />
        <TimeChallenge title={'Pros only'} targetTime={15} />
      </div>
    </>
  );
}

export default App;
