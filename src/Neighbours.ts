export class Neighbours {

    static LIVING_CELL: string = '*'

    static count(grid: string, i: number): number {
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

    private static hasTopLeftLivingCell(grid: string, i: number) {
        return grid[i - 10] === this.LIVING_CELL
    }

    private static hasTopLivingCell(grid: string, i: number) {
        return grid[i - 9] === this.LIVING_CELL
    }

    private static hasTopRightLivingCell(grid: string, i: number) {
        return grid[i - 8] === this.LIVING_CELL
    }

    private static hasRightLivingCell(grid: string, i: number) {
        return grid[i + 1] === this.LIVING_CELL
    }

    private static hasBottomRightLivingCell(grid: string, i: number) {
        return grid[i + 10] === this.LIVING_CELL
    }

    private static hadBottomLivingCell(grid: string, i: number) {
        return grid[i + 9] === this.LIVING_CELL
    }

    private static hasBottomLeftLivingCell(grid: string, i: number) {
        return grid[i + 8] === this.LIVING_CELL
    }

    private static hasLeftLivingCell(grid: string, i: number) {
        return grid[i - 1] === this.LIVING_CELL
    }
}