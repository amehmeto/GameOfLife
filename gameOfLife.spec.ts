import {GameOfLife} from './gameOfLife'

describe('Game of Life', () => {
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
            new GameOfLife().generateNext(initialGeneration)
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
            new GameOfLife().generateNext(initialGeneration)
        ).toStrictEqual(nextGeneration)
    })
})