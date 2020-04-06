import {Cell, Generation} from './GameOfLife'

export class Neighbours {

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
        return g.grid[i - g.width - 2] ===  Cell.LIVING
    }

    private static hasTopLivingCell(g: Generation, i: number) {
        return g.grid[i - g.width - 1] === Cell.LIVING
    }

    private static hasTopRightLivingCell(g: Generation, i: number) {
        return g.grid[i - g.width] === Cell.LIVING
    }

    private static hasRightLivingCell(g: Generation, i: number) {
        return g.grid[i + 1] === Cell.LIVING
    }

    private static hasBottomRightLivingCell(g: Generation, i: number) {
        return g.grid[i + g.width + 2] === Cell.LIVING
    }

    private static hadBottomLivingCell(g: Generation, i: number) {
        return g.grid[i + g.width + 1] === Cell.LIVING
    }

    private static hasBottomLeftLivingCell(g: Generation, i: number) {
        return g.grid[i + g.width] === Cell.LIVING
    }

    private static hasLeftLivingCell(g: Generation, i: number) {
        return g.grid[i - 1] === Cell.LIVING
    }
}