import {GameOfLife, Grid} from './GameOfLife'
import {Parser} from './Parser'

describe('Game of Life tests suite', () => {

    it.each([
        [
            'Generation 1:\n' +
            '4 8\n' +
            '........\n' +
            '..**..*.\n' +
            '..**..*.\n' +
            '........\n',
            {
                generation: 1,
                height: 4,
                width: 8,
                grid: "........\n..**..*.\n..**..*.\n........\n",
            }
        ]
    ])('should parse initialGeneration input',
        (initialGeneration: string, parsedGrid: Grid) => {
        expect(Parser.parse(initialGeneration)).toStrictEqual(parsedGrid)
    })

    it('should reject wrong format', () => {
        expect(Parser.parse).toThrowError('Not able to match grid pattern')
        let thrownError
        const initialGeneration = 'Generation :\n' +
            '4 8\n' +
            '........\n' +
            '..**..*.\n' +
            '..**..*.\n' +
            '........\n'

        try {
            Parser.parse(initialGeneration)
        } catch (e) {
            thrownError = e
        }
        expect(thrownError).toStrictEqual(new Error('Grid data is null'))
    })

    it.each([
        [
            'Generation 1:\n' +
            '4 8\n' +
            '........\n' +
            '........\n' +
            '........\n' +
            '........\n',
            'Generation 2:\n' +
            '4 8\n' +
            '........\n' +
            '........\n' +
            '........\n' +
            '........\n'
        ],
        [
            'Generation 2:\n' +
            '4 8\n' +
            '........\n' +
            '........\n' +
            '........\n' +
            '........\n',
            'Generation 3:\n' +
            '4 8\n' +
            '........\n' +
            '........\n' +
            '........\n' +
            '........\n',
        ],
        [
            'Generation 12:\n' +
            '4 8\n' +
            '........\n' +
            '........\n' +
            '........\n' +
            '........\n',
            'Generation 13:\n' +
            '4 8\n' +
            '........\n' +
            '........\n' +
            '........\n' +
            '........\n',
        ],
    ])('should increment Generation number at first line', (initialGeneration, nextGeneration) => {
        expect(
            new GameOfLife().generateFrom(initialGeneration)
        ).toStrictEqual(nextGeneration)
    })

    it.each([
        [
            'Generation 1:\n' +
            '4 8\n' +
            '........\n' +
            '...*....\n' +
            '........\n' +
            '........\n',
            'Generation 2:\n' +
            '4 8\n' +
            '........\n' +
            '........\n' +
            '........\n' +
            '........\n',
        ],
        [
            'Generation 1:\n' +
            '4 8\n' +
            '........\n' +
            '..**..*.\n' +
            '..**..*.\n' +
            '........\n',
            'Generation 2:\n' +
            '4 8\n' +
            '........\n' +
            '..**....\n' +
            '..**....\n' +
            '........\n',
        ],
    ])('should kill cell if it has fewer than 2 neighbours',
        (initialGeneration, nextGeneration) => {
        expect(
            new GameOfLife().generateFrom(initialGeneration)
        ).toStrictEqual(nextGeneration)
    })
})