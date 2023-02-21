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

    public getCell(x: number, y: number) {
        return this.cells[y][x];
    }

    private addWhiteCheckers() {
        new Checker(Colors.WHITE, this.getCell(1, 0));
        new Checker(Colors.WHITE, this.getCell(3, 0));
        new Checker(Colors.WHITE, this.getCell(5, 0));
        new Checker(Colors.WHITE, this.getCell(7, 0));
        new Checker(Colors.WHITE, this.getCell(0, 1));
        new Checker(Colors.WHITE, this.getCell(2, 1));
        new Checker(Colors.WHITE, this.getCell(4, 1));
        new Checker(Colors.WHITE, this.getCell(6, 1));
        new Checker(Colors.WHITE, this.getCell(1, 2));
        new Checker(Colors.WHITE, this.getCell(3, 2));
        new Checker(Colors.WHITE, this.getCell(5, 2));
        new Checker(Colors.WHITE, this.getCell(7, 2));
    }

    private addBlackCheckers() {
        new Checker(Colors.BLACK, this.getCell(0, 7));
        new Checker(Colors.BLACK, this.getCell(2, 7));
        new Checker(Colors.BLACK, this.getCell(4, 7));
        new Checker(Colors.BLACK, this.getCell(6, 7));
        new Checker(Colors.BLACK, this.getCell(1, 6));
        new Checker(Colors.BLACK, this.getCell(3, 6));
        new Checker(Colors.BLACK, this.getCell(5, 6));
        new Checker(Colors.BLACK, this.getCell(7, 6));
        new Checker(Colors.BLACK, this.getCell(0, 5));
        new Checker(Colors.BLACK, this.getCell(2, 5));
        new Checker(Colors.BLACK, this.getCell(4, 5));
        new Checker(Colors.BLACK, this.getCell(6, 5));
    }

    public addFigures() {
        // new Checker(Colors.WHITE, this.getCell(1, 0));
        // new Checker(Colors.WHITE, this.getCell(3, 0));
        // new Checker(Colors.WHITE, this.getCell(5, 0));
        // new Checker(Colors.WHITE, this.getCell(2, 1));
        // new King(Colors.WHITE, this.getCell(1, 2));
        // new Checker(Colors.BLACK, this.getCell(3, 2));
        // new King(Colors.WHITE, this.getCell(5, 2));
        // new King(Colors.BLACK, this.getCell(3, 4));
        // new Checker(Colors.BLACK, this.getCell(6, 5));
        // new Checker(Colors.BLACK, this.getCell(3, 6));
        // new Checker(Colors.BLACK, this.getCell(0, 7));
        this.addBlackCheckers();
        this.addWhiteCheckers();
    }
}
