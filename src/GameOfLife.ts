import {Parser} from './Parser'

export class GameOfLife {

    private readonly LIVING_CELL = '*'
    private readonly DEAD_CELL = '.'
    private readonly NEW_LINE = "\n"

    generateNext(initialGeneration: string): string {
        let nextGrid: Grid = Parser.parse(initialGeneration)
        return this.buildNextGeneration(nextGrid)
    }

    private buildNextGeneration(nextGrid: Grid): string {
        return 'Generation ' + (nextGrid.generation + 1) + ':\n' +
            nextGrid.height + ' ' + nextGrid.width + '\n' +
            this.buildNewGrid(nextGrid.grid)
    }

    private buildNewGrid(grid: string): string {
        let newGrid: string = ''

        for (let i = 0 ; grid[i] ; i++) {
            let neighbours = this.countNeighbours(grid, i)
            newGrid = this.writeAccordingToNeighbours(grid, i, newGrid, neighbours)
        }
        return newGrid
    }

    private writeAccordingToNeighbours(grid: string, i: number, newGrid: string, neighbours: number) {
        if (grid[i] === this.NEW_LINE)
            newGrid += this.NEW_LINE
        else
            newGrid += (neighbours < 2) ? this.DEAD_CELL : grid[i]
        return newGrid
    }

    private countNeighbours(grid: string, i: number): number {
        let neighbours: number = 0
        if (this.hasLeftLivingCell(grid, i))
            neighbours++
        if (this.hasRightLivingCell(grid, i))
            neighbours++
        if (this.hasTopLivingCell(grid, i))
            neighbours++
        if (this.hadBottomLivingCell(grid, i))
            neighbours++
        if (this.hasTopLeftLivingCell(grid, i))
            neighbours++
        if (this.hasTopRightLivingCell(grid, i))
            neighbours++
        if (this.hasBottomLeftLivingCell(grid, i))
            neighbours++
        if (this.hasBottomRightLivingCell(grid, i))
            neighbours++
        return neighbours
    }

    private hasTopLeftLivingCell(grid: string, i: number) {
        return grid[i - 10] === this.LIVING_CELL
    }

    private hasTopLivingCell(grid: string, i: number) {
        return grid[i - 9] === this.LIVING_CELL
    }

    private hasTopRightLivingCell(grid: string, i: number) {
        return grid[i - 8] === this.LIVING_CELL
    }

    private hasRightLivingCell(grid: string, i: number) {
        return grid[i + 1] === this.LIVING_CELL
    }

    private hasBottomRightLivingCell(grid: string, i: number) {
        return grid[i + 10] === this.LIVING_CELL
    }

    private hadBottomLivingCell(grid: string, i: number) {
        return grid[i + 9] === this.LIVING_CELL
    }

    private hasBottomLeftLivingCell(grid: string, i: number) {
        return grid[i + 8] === this.LIVING_CELL
    }

    private hasLeftLivingCell(grid: string, i: number) {
        return grid[i - 1] === this.LIVING_CELL
    }
}

export type Grid = {
    generation: number,
    height: number,
    width: number,
    grid: string,
}
