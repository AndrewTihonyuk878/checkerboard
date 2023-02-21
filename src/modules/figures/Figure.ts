import Logo from '../../assets/b.png';
import { Cell } from '../Cell';
import { Colors } from '../Colors';

export enum FigureNames {
    FIGURE = '',
    CHECKER = 'Checker',
    KING = 'King',
}

export class Figure {
    color: Colors;
    logo: typeof Logo | null;
    cell: Cell;
    name: FigureNames;
    id: number;

    constructor(color: Colors, cell: Cell) {
        this.color = color;
        this.cell = cell;
        this.cell.figure = this;
        this.logo = null;
        this.name = FigureNames.FIGURE;
        this.id = Math.random();
    }

    canMove(target: Cell): boolean {
        return true;
    }
    moveFigure(target: Cell) {}
}
