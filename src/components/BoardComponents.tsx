import React, { FC, useEffect, useState } from 'react'
import { Board } from '../modules/Board';
import { Cell } from '../modules/Cell';
import CellComponents from './CellComponents';
import { setSelectedCell, selectfild } from '../redux/slices/BoardSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Player } from '../modules/Player';

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
    currentPlayer: Player | null;
    swapPlayer: () => void;
}

const BoardComponents: FC<BoardProps> = ({board, setBoard, currentPlayer, swapPlayer}) => {

    const dispatch = useDispatch();
    const fild = useSelector(selectfild);

    const onClickCell = (cell: Cell) => {
        if (fild && fild !== cell && fild.figure?.canMove(cell)) {
            fild.moveFigure(cell)
            swapPlayer()
            dispatch(setSelectedCell(null))
            updateBoard()
        } else {
            if (cell.figure?.color === currentPlayer?.color) {
                dispatch(setSelectedCell((cell)))
            }
        }
    }

    useEffect(() => {
        highlightCells()
    }, [fild])

    function highlightCells() {
        board.highlightCells(fild)
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
                                swapPlayer={swapPlayer}
                                currentPlayer={currentPlayer}
                                setBoard={setBoard}
                                board={board}
                                onClickCell={onClickCell}
                                cell={cell}
                                key={cell.id}
                                selected={cell.x === fild?.x && cell.y === fild?.y}/>
                        )}
                    </React.Fragment>
                )}
            </div>
        </div>
    )
}

export default BoardComponents;


