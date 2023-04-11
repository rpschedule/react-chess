import './App.css';
import Board from './Board';

function App() {
  return (
    <div className='Main'>
      <Board fen='rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 0'/>
    </div>
  );
}

export default App;