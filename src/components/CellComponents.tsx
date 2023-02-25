import { FC, useEffect, useState } from 'react';
import { Board } from '../modules/Board';
import { Cell } from '../modules/Cell';
import { Player } from '../modules/Player';


interface CellProps {
    selectedCell: Cell | null;
    setSelectedCell: (target: Cell | null) => void;
    currentPlayer: Player | null;
    board: Board;
    setBoard: (board: Board) => void;
    cell: Cell;
    selected: boolean;
    onClickCell: (cell: Cell) => void;
    swapPlayer: () => void;
}

const CellComponents: FC<CellProps> = ({cell, selectedCell, setSelectedCell, swapPlayer, currentPlayer, setBoard, board, selected, onClickCell}) => {

    // useEffect(() => {
    //     highlightCells()
    // }, [selectedCell])

    function highlightCells() {
        board.highlightCells(selectedCell)
        updateBoard()
    }

    function updateBoard() {
        const newBoard = board.getCopyBoard()
        setBoard(newBoard)
    }

    function dragStartHandler(e: React.DragEvent<HTMLDivElement>, cell: Cell) {
        console.log('DRAG', cell)
    }

    function dragOverHandler(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault()
    }

    function dropHandler(e: React.DragEvent<HTMLDivElement>, target: Cell)  {
        console.log('DROP', target)
        if (selectedCell && selectedCell !== target && selectedCell.figure?.canMove(target)) {
            selectedCell.moveFigure(target)
            swapPlayer()
        }
    }

    return (
        <div 
            draggable={true}
            onDragStart={(e) => dragStartHandler(e, cell)}
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropHandler(e, cell)}
            className={['cell', cell.color, selected ? 'selected' : ''].join(' ')}
            onClick={() => onClickCell(cell)}
            >
            {cell.available && !cell.figure && <div className={"available"}/>}    
            {cell.figure?.logo && <img src={cell.figure.logo} alt=""/>}
        </div>
    );
};

export default CellComponents;


