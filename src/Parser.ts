import {Grid} from './GameOfLife'

export class Parser {

    static parse(initialGeneration: string): Grid {
        let gridDataPattern: string = "^Generation (\\d+):\\n(\\d+) (\\d+)\\n([\\.*\\n]+)$"
        let gridData: RegExpMatchArray | null =
            initialGeneration.match(gridDataPattern)

        if (gridData){
            return {
                generation: +gridData[GridDataPattern.Generation],
                height: +gridData[GridDataPattern.Height],
                width: +gridData[GridDataPattern.Width],
                grid: gridData[GridDataPattern.Grid]
            }
        } else
             throw Error('Wrong input format')
    }

}

enum GridDataPattern {
    Generation = 1,
    Height = 2,
    Width = 3,
    Grid = 4,
}