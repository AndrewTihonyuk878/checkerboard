import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Cell } from '../modules/Cell';
import { selectfild, setSelectedCell } from '../redux/slices/BoardSlice';

interface CellProps {
    cell: Cell;
    selected: boolean;
    onClickCell: (cell: Cell) => void;
}

const CellComponents: FC<CellProps> = ({cell, selected, onClickCell}) => {

    const dispatch = useDispatch();
    const fildDrop = useSelector(selectfild);

    function dragStartHandler(e: React.DragEvent<HTMLDivElement>, checker: Cell) {
        console.log('drag', checker)
        dispatch(setSelectedCell(checker))
    }
    
    
    function dropHandler(e: React.DragEvent<HTMLDivElement>, checker: Cell) {
        e.preventDefault()
        console.log('drop', checker)
        dispatch(setSelectedCell(checker))
    }

    return (
        <div 
            onDragStart={(e) => dragStartHandler(e, cell)}
            // onDragLeave={(e) => dragLeaveHandler(e)}
            // onDragEnd={(e) => dragEndHandler(e)}
            // onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropHandler(e, cell)}
            draggable={true}
            className={['cell', cell.color, selected ? 'selected' : ''].join(' ')}
            onClick={() => onClickCell(cell)}
            >
            {cell.available && !cell.figure && <div className={"available"}/>}    
            {cell.figure?.logo && <img src={cell.figure.logo} alt=""/>}
        </div>
    );
};

export default CellComponents;

function swapPlayer() {
    throw new Error('Function not implemented.');
}
function updateBoard() {
    throw new Error('Function not implemented.');
}

