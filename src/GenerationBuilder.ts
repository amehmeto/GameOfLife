import {Neighbours} from './Neighbours'
import {Cell, Generation} from './GameOfLife'

export class GenerationBuilder {

    static buildGeneration(nextGeneration: Generation): Generation {
        return {
            generation: nextGeneration.generation + 1,
            height: nextGeneration.height,
            width: nextGeneration.width,
            grid: this.buildNextGrid(nextGeneration)
        }
    }

    static formatWith(g: Generation): string {
        return 'Generation ' + g.generation + ':\n' +
            g.height + ' ' + g.width + '\n' +
            g.grid
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
            newGrid += (neighbours === 3) ? Cell.LIVING : Cell.DEAD
        else if (this.isLivingCell(g.grid, i))
            newGrid += (neighbours < 2 || neighbours > 3) ? Cell.DEAD : Cell.LIVING
        else
            newGrid += Cell.NEW_LINE
        return newGrid
    }

    private static isLivingCell(grid: string, i: number) {
        return grid[i] === Cell.LIVING
    }

    private static isDeadCell(grid: string, i: number) {
        return grid[i] === Cell.DEAD
    }
}