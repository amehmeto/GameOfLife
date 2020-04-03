import {Neighbours} from './Neighbours'
import {Grid} from './GameOfLife'

export class GridBuilder {
    private static NEW_LINE = "\n"
    private static DEAD_CELL = '.'
    private static LIVING_CELL: string = '*'

    static buildGeneration(nextGrid: Grid): Grid {
        return {
            generation: nextGrid.generation + 1,
            height: nextGrid.height,
            width: nextGrid.width,
            grid: this.buildNextGrid(nextGrid.grid)
        }
    }

    static formatWith(grid: Grid): string {
        return 'Generation ' + grid.generation + ':\n' +
            grid.height + ' ' + grid.width + '\n' +
            grid.grid
    }

    private static buildNextGrid(grid: string): string {
        let newGrid: string = ''

        for (let i = 0 ; grid[i] ; i++) {
            let neighbours = Neighbours.count(grid, i)
            newGrid = this.writeAccordingToNeighbourhood(grid, i, newGrid, neighbours)
        }
        return newGrid
    }

    private static writeAccordingToNeighbourhood(grid: string, i: number, newGrid: string, neighbours: number) {
        if (this.isDeadCell(grid, i))
            newGrid += (neighbours === 3) ? this.LIVING_CELL : this.DEAD_CELL
        else if (this.isLivingCell(grid, i))
            newGrid += (neighbours < 2 || neighbours > 3) ? this.DEAD_CELL : this.LIVING_CELL
        else
            newGrid += this.NEW_LINE
        return newGrid
    }

    private static isLivingCell(grid: string, i: number) {
        return grid[i] === this.LIVING_CELL
    }

    private static isDeadCell(grid: string, i: number) {
        return grid[i] === this.DEAD_CELL
    }
}