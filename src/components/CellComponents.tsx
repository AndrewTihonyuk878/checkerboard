import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Board } from '../modules/Board';
import { Cell } from '../modules/Cell';
import { selectfild, setSelectedCell } from '../redux/slices/BoardSlice';
import { Player } from '../modules/Player';


interface CellProps {
    currentPlayer: Player | null;
    board: Board;
    setBoard: (board: Board) => void;
    cell: Cell;
    selected: boolean;
    onClickCell: (cell: Cell) => void;
    swapPlayer: () => void;
}

const CellComponents: FC<CellProps> = ({cell, swapPlayer, currentPlayer, setBoard, board, selected, onClickCell}) => {

    const dispatch = useDispatch();
    const fild = useSelector(selectfild);

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

    function dragStartHandler(e: React.DragEvent<HTMLDivElement>, cell: Cell) {
        console.log('DRAG', cell)
        dispatch(setSelectedCell(null))
        updateBoard()
    }

    function dragOverHandler(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault()
    }

    function dropHandler(e: React.DragEvent<HTMLDivElement>, cell: Cell)  {
        console.log('DROP', cell)
        if (fild && fild !== cell && fild.figure?.canMove(cell)) {
            fild.moveFigure(cell)
            swapPlayer()
        }
        updateBoard()
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


