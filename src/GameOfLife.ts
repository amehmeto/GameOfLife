import {Parser} from './Parser'
import {GridBuilder} from './GridBuilder'

export class GameOfLife {

    generateFrom(initialGeneration: string): string {
        let nextGrid: Grid = Parser.parse(initialGeneration)
        return GridBuilder.buildNextGeneration(nextGrid)
    }

}

export type Grid = {
    generation: number,
    height: number,
    width: number,
    grid: string,
}