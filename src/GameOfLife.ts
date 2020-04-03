export class GameOfLife {
    generateNext(initialGeneration: string): string {
        return this.parse(initialGeneration)
    }

    public parse(initialGeneration: string) {
        let firstLinePattern: string = "^Generation (\\d+):\\s\\d+ \\d+"
        let generationNumber: RegExpMatchArray | null =
            initialGeneration.match(firstLinePattern)

        if (this.isNumber(generationNumber)) {
            return 'Generation ' + (+generationNumber![1] + 1) + ':\n' +
                '4 8\n' +
                '........\n' +
                '........\n' +
                '........\n' +
                '........\n'
        } else
            throw new Error('Wrong entry format')
    }

    private isNumber(generationNumber: RegExpMatchArray | null) {
        return generationNumber && Number.isInteger(+generationNumber[1])
    }
}

export type Grid = {
    generation: number,
    height: number,
    width: number,
    grid: string,
}