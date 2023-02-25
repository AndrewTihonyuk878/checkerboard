import React, { FC, useEffect, useState } from 'react'
import { Board } from '../modules/Board';
import { Cell } from '../modules/Cell';
import CellComponents from './CellComponents';
import { Player } from '../modules/Player';
import ConfigurationComponent from './ConfigurationComponent';

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
    currentPlayer: Player | null;
    swapPlayer: () => void;
}

const BoardComponents: FC<BoardProps> = ({board, setBoard, currentPlayer, swapPlayer}) => {

    const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

    const onClickCell = (target: Cell) => {
        if (selectedCell && selectedCell !== target && selectedCell.figure?.canMove(target)) {
            selectedCell.moveFigure(target)
            swapPlayer()
            setSelectedCell(null)
            updateBoard()
        } else {
            if (target.figure?.color === currentPlayer?.color) {
                setSelectedCell(target)
            }
        }
    }

    useEffect(() => {
        highlightCells()
    }, [selectedCell])

    function highlightCells() {
        board.highlightCells(selectedCell)
        updateBoard()
    }

    function updateBoard() {
        const newBoard = board.getCopyBoard()
        setBoard(newBoard)
    }

    return (
        <div>
            <h3>Current player <b>{currentPlayer?.color}</b></h3>
            <div className='board'>
                {board.cells.map((row, index) => 
                    <React.Fragment key={index}>
                        {row.map(cell => 
                            <CellComponents
                                setSelectedCell={setSelectedCell}
                                selectedCell={selectedCell}
                                swapPlayer={swapPlayer}
                                currentPlayer={currentPlayer}
                                setBoard={setBoard}
                                board={board}
                                onClickCell={onClickCell}
                                cell={cell}
                                key={cell.id}
                                selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}/>
                        )}
                    </React.Fragment>
                )}
            </div>
        </div>
    )
}

export default BoardComponents;


