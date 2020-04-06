import {Neighbours} from './Neighbours'
import {Generation} from './GameOfLife'

export class GridBuilder {
    private static NEW_LINE = "\n"
    private static DEAD_CELL = '.'
    private static LIVING_CELL: string = '*'

    static buildGeneration(nextGeneration: Generation): Generation {
        return {
            generation: nextGeneration.generation + 1,
            height: nextGeneration.height,
            width: nextGeneration.width,
            grid: this.buildNextGrid(nextGeneration)
        }
    }

    static formatWith(grid: Generation): string {
        return 'Generation ' + grid.generation + ':\n' +
            grid.height + ' ' + grid.width + '\n' +
            grid.grid
    }

    private static buildNextGrid(g: Generation): string {
        let newGrid: string = ''

        for (let i = 0 ; g.grid[i] ; i++) {
            let neighbours = Neighbours.count(g, i)
            newGrid = this.writeAccordingToNeighbourhood(g, i, newGrid, neighbours)
        }
        return newGrid
    }

    private static writeAccordingToNeighbourhood(g: Generation, i: number, newGrid: string, neighbours: number) {
        if (this.isDeadCell(g.grid, i))
            newGrid += (neighbours === 3) ? this.LIVING_CELL : this.DEAD_CELL
        else if (this.isLivingCell(g.grid, i))
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