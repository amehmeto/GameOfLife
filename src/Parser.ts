import {Grid} from './GameOfLife'

export class Parser {

    parse(initialGeneration: string): Grid {
        let gridDataPattern: string = "^Generation (\\d+):\\n(\\d+) (\\d+)\\n([\\.*\\n]+)$"
        let gridData: RegExpMatchArray | null =
            initialGeneration.match(gridDataPattern)

        console.log(gridDataPattern, JSON.stringify(gridData))
        if (gridData){
            return {
                generation: +gridData[1],
                height: +gridData[2],
                width: +gridData[3],
                grid: gridData[4]
            }
        }
        return {
            generation: 0,
            height: 0,
            width: 0,
            grid: '',
        }
        /*
         else
             throw Error('Wrong input format')

        */
    }
}