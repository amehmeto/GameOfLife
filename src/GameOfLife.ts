import {Parser} from './Parser'
import {GridBuilder} from './GridBuilder'

export class GameOfLife {

    generateFrom(initialGeneration: string): string {
        let initialGrid: Generation = Parser.parse(initialGeneration)
        let nextGrid: Generation = GridBuilder.buildGeneration(initialGrid)
        return GridBuilder.formatWith(nextGrid)
    }

}

export type Generation = {
    generation: number,
    height: number,
    width: number,
    grid: string,
}