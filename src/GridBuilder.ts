import {Neighbours} from './Neighbours'
import {Grid} from './GameOfLife'

export class GridBuilder {
    private static NEW_LINE = "\n"
    private static DEAD_CELL = '.'

    static buildNextGeneration(nextGrid: Grid): string {
        return 'Generation ' + (nextGrid.generation + 1) + ':\n' +
            nextGrid.height + ' ' + nextGrid.width + '\n' +
            this.buildNextGrid(nextGrid.grid)
    }

    private static buildNextGrid(grid: string): string {
        let newGrid: string = ''

        for (let i = 0 ; grid[i] ; i++) {
            let neighbours = Neighbours.count(grid, i)
            newGrid = this.writeAccordingToNeighbours(grid, i, newGrid, neighbours)
        }
        return newGrid
    }

    private static writeAccordingToNeighbours(grid: string, i: number, newGrid: string, neighbours: number) {
        if (grid[i] === this.NEW_LINE)
            newGrid += this.NEW_LINE
        else
            newGrid += (neighbours < 2) ? this.DEAD_CELL : grid[i]
        return newGrid
    }

}