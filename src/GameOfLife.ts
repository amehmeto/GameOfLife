import {Parser} from './Parser'
import {GridBuilder} from './GridBuilder'

export class GameOfLife {

    generateFrom(initialGeneration: string): string {
        let initialGrid: Grid = Parser.parse(initialGeneration)
        let nextGrid: Grid = GridBuilder.buildGeneration(initialGrid)
        return GridBuilder.formatWith(nextGrid)
    }

}

export type Grid = {
    generation: number,
    height: number,
    width: number,
    grid: string,
}