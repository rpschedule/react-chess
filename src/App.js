import './App.css';
import Board from './Board';

function App() {
  return (
    <div className='Main'>
      <Board fen='rnbqkbnr/ppppppPp/8/8/8/8/PPPPPP1P/RNBQKBNR w KQkq - 0 1'/>
    </div>
  );
}

export default App;