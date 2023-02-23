import { Cell } from './Cell';
import { Colors } from './Colors';
import { Checker } from './figures/Checker';
import { King } from './figures/King';

export class Board {
    cells: Cell[][] = [];

    public initCells() {
        for (let i = 0; i < 8; i++) {
            const row: Cell[] = [];
            for (let j = 0; j < 8; j++) {
                if ((i + j) % 2 !== 0) {
                    row.push(new Cell(this, j, i, Colors.BLACK, null)); // black cell
                } else {
                    row.push(new Cell(this, j, i, Colors.WHITE, null)); // white cell
                }
            }
            this.cells.push(row);
        }
    }

    public getCopyBoard(): Board {
        const newBoard = new Board();
        newBoard.cells = this.cells;
        return newBoard;
    }

    public highlightCells(selectedCell: Cell | null) {
        for (let i = 0; i < this.cells.length; i++) {
            const row = this.cells[i];
            for (let j = 0; j < row.length; j++) {
                const target = row[j];
                target.available = !!selectedCell?.figure?.canMove(target);
            }
        }
    }

    public getCell(x: number, y: number) {
        return this.cells[y][x];
    }

    public configurCells(symbol: string) {}

    public filterSymbol(text: string) {
        switch (text) {
            case 'W':
                new Checker(Colors.WHITE, this.getCell(1, 0));
                break;
            case 'WK':
                new King(Colors.WHITE, this.getCell(1, 2));
                break;
            case 'B':
                new Checker(Colors.WHITE, this.getCell(1, 0));
                break;
            case 'BA':
                new King(Colors.BLACK, this.getCell(3, 4));
                break;
            default:
                return null;
        }
    }

    public addFigures() {
        new Checker(Colors.WHITE, this.getCell(1, 0));
        new Checker(Colors.WHITE, this.getCell(3, 0));
        new Checker(Colors.WHITE, this.getCell(5, 0));
        new Checker(Colors.WHITE, this.getCell(2, 1));
        new King(Colors.WHITE, this.getCell(1, 2));
        new Checker(Colors.BLACK, this.getCell(3, 2));
        new King(Colors.WHITE, this.getCell(5, 2));
        new King(Colors.BLACK, this.getCell(3, 4));
        new Checker(Colors.BLACK, this.getCell(6, 5));
        new Checker(Colors.BLACK, this.getCell(3, 6));
        new Checker(Colors.BLACK, this.getCell(0, 7));
    }
}
