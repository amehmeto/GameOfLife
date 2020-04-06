import {Generation} from './GameOfLife'

export class Neighbours {

    static LIVING_CELL: string = '*'

    static count(g: Generation, i: number): number {
        let neighbours: number = 0
        if (this.hasTopLeftLivingCell(g, i))
            neighbours++
        if (this.hasTopLivingCell(g, i))
            neighbours++
        if (this.hasTopRightLivingCell(g, i))
            neighbours++
        if (this.hasRightLivingCell(g, i))
            neighbours++
        if (this.hasBottomRightLivingCell(g, i))
            neighbours++
        if (this.hadBottomLivingCell(g, i))
            neighbours++
        if (this.hasBottomLeftLivingCell(g, i))
            neighbours++
        if (this.hasLeftLivingCell(g, i))
            neighbours++
        return neighbours
    }

    private static hasTopLeftLivingCell(g: Generation, i: number) {
        return g.grid[i - g.width - 2] === this.LIVING_CELL
    }

    private static hasTopLivingCell(g: Generation, i: number) {
        return g.grid[i - g.width - 1] === this.LIVING_CELL
    }

    private static hasTopRightLivingCell(g: Generation, i: number) {
        return g.grid[i - g.width] === this.LIVING_CELL
    }

    private static hasRightLivingCell(g: Generation, i: number) {
        return g.grid[i + 1] === this.LIVING_CELL
    }

    private static hasBottomRightLivingCell(g: Generation, i: number) {
        return g.grid[i + g.width + 2] === this.LIVING_CELL
    }

    private static hadBottomLivingCell(g: Generation, i: number) {
        return g.grid[i + g.width + 1] === this.LIVING_CELL
    }

    private static hasBottomLeftLivingCell(g: Generation, i: number) {
        return g.grid[i + g.width] === this.LIVING_CELL
    }

    private static hasLeftLivingCell(g: Generation, i: number) {
        return g.grid[i - 1] === this.LIVING_CELL
    }
}