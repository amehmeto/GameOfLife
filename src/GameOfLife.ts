import {Parser} from './Parser'
import {GenerationBuilder} from './GenerationBuilder'

export class GameOfLife {

    generateFrom(initialRawGeneration: string): string {
        let parsedGeneration: Generation = Parser.parse(initialRawGeneration)
        let nextGeneration: Generation = GenerationBuilder.buildGeneration(parsedGeneration)
        return GenerationBuilder.formatWith(nextGeneration)
    }

}

export enum Cell {
    LIVING = '*',
    DEAD = '.',
    NEW_LINE = "\n",
}

export type Generation = {
    generation: number,
    height: number,
    width: number,
    grid: string,
}