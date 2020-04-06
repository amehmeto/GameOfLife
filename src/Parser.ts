import {Generation} from './GameOfLife'

export class Parser {

    static parse(initialGeneration: string): Generation {
        let gridDataPattern: string = "^Generation (\\d+):\\n(\\d+) (\\d+)\\n([\\.*\\n]+)$"
        let gridData: RegExpMatchArray | null

        try {
            gridData = initialGeneration.match(gridDataPattern)
        } catch (e) {
            throw Error('Not able to match grid pattern')
        }

        if (gridData){
            return {
                generation: +gridData[GridDataPattern.Generation],
                height: +gridData[GridDataPattern.Height],
                width: +gridData[GridDataPattern.Width],
                grid: gridData[GridDataPattern.Grid]
            }
        } else
             throw Error('Grid data is null')
    }

}

enum GridDataPattern {
    Generation = 1,
    Height = 2,
    Width = 3,
    Grid = 4,
}
