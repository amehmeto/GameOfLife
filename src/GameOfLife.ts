import {Parser} from './Parser'

export class GameOfLife {
    generateNext(initialGeneration: string): string {
        let nextGrid: Grid = Parser.parse(initialGeneration)
        return 'Generation ' + (nextGrid.generation + 1) + ':\n' +
        nextGrid.height + ' ' + nextGrid.width + '\n' +
        nextGrid.grid
    }
}

export type Grid = {
    generation: number,
    height: number,
    width: number,
    grid: string,
}