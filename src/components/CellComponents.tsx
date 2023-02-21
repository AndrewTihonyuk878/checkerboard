import { FC } from 'react';
import { Cell } from '../modules/Cell';

interface CellProps {
    cell: Cell;
}

const CellComponents: FC<CellProps> = ({cell}) => {
    return (
        <div className={['cell', cell.color].join(' ')}>
            {cell.figure?.logo && <img src={cell.figure.logo} alt=""/>}
        </div>
    );
};

export default CellComponents;