import React, { FC } from 'react'
import { Board } from '../modules/Board';
import CellComponents from './CellComponents';

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
}

const BoardComponents: FC<BoardProps> = ({board, setBoard}) => {

  return (
    <div className='board'>
        {board.cells.map((row, index) => 
            <React.Fragment key={index}>
                {row.map(cell => 
                    <CellComponents
                        cell={cell}
                        key={cell.id}/>
                )}
            </React.Fragment>
        )}
    </div>
  )
}

export default BoardComponents;
