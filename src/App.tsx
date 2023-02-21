import { useState, useEffect } from 'react';
import './App.scss';
import BoardComponents from './components/BoardComponents';
import { Board } from './modules/Board';

function App() {

  const [board, setBoard] = useState(new Board())

  useEffect(() => {
    restart()
  }, [])

  function restart() {
    const newBoard = new Board()
    newBoard.initCells()
    newBoard.addFigures()
    setBoard(newBoard)
  }

  return (
    <div className='app'>
      <BoardComponents
        board={board}
        setBoard={setBoard}
        />
    </div>
  );
}

export default App;


