import {Cell, Generation} from './GameOfLife'

export class Parser {

    static parse(initialGeneration: string): Generation {
        let rawGenerationPattern: string =
            "^Generation (\\d+):" + Cell.NEW_LINE + "(\\d+) (\\d+)" + Cell.NEW_LINE + "([\\"
            + Cell.LIVING + Cell.DEAD + Cell.NEW_LINE + "]+)$"
        let matches: RegExpMatchArray | null

        try {
            matches = initialGeneration.match(rawGenerationPattern)
        } catch (e) {
            throw Error('Not able to match generation pattern')
        }

        if (matches) {
            return {
                generation: +matches[CapturedPattern.Generation],
                height: +matches[CapturedPattern.Height],
                width: +matches[CapturedPattern.Width],
                grid: matches[CapturedPattern.Grid]
            }
        } else
             throw Error('Raw generation format is not correct')
    }

}

enum CapturedPattern {
    Generation = 1,
    Height = 2,
    Width = 3,
    Grid = 4,
}
