import {GameOfLife, Generation} from './GameOfLife'
import {Parser} from './Parser'
import {GenerationBuilder} from './GenerationBuilder'

describe('Game of Life tests suite', () => {

    function assertNextGeneration(
        initialGeneration: string,
        nextGeneration: string
    ) {
        expect(
            new GameOfLife().generateFrom(initialGeneration),
        ).toStrictEqual(nextGeneration)
    }

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
        (initialGeneration: string, parsedGrid: Generation) => {
            expect(Parser.parse(initialGeneration)).toStrictEqual(parsedGrid)
        })

    it('should reject wrong format', () => {
        expect(Parser.parse).toThrowError('Not able to match grid pattern')
        const initialGeneration = 'Generation :\n' +
            '4 8\n' +
            '........\n' +
            '..**..*.\n' +
            '..**..*.\n' +
            '........\n'
        let thrownError

        try {
            Parser.parse(initialGeneration)
        } catch (e) {
            thrownError = e
        }
        expect(thrownError).toStrictEqual(new Error('Raw generation format is not correct'))
    })

    it.each([
        [
            GenerationBuilder.formatWith({
                generation: 1,
                height: 4,
                width: 8,
                grid:
                    "........\n" +
                    "........\n" +
                    "........\n" +
                    "........\n",
            }),
            GenerationBuilder.formatWith({
                generation: 2,
                height: 4,
                width: 8,
                grid:
                    "........\n" +
                    "........\n" +
                    "........\n" +
                    "........\n",
            })
        ],
        [
            GenerationBuilder.formatWith({
                generation: 2,
                height: 4,
                width: 8,
                grid:
                    "........\n" +
                    "........\n" +
                    "........\n" +
                    "........\n",
            }),
            GenerationBuilder.formatWith({
                generation: 3,
                height: 4,
                width: 8,
                grid:
                    "........\n" +
                    "........\n" +
                    "........\n" +
                    "........\n",
            }),
        ],
        [
            GenerationBuilder.formatWith({
                generation: 12,
                height: 4,
                width: 8,
                grid:
                    "........\n" +
                    "........\n" +
                    "........\n" +
                    "........\n",
            }),
            GenerationBuilder.formatWith({
                generation: 13,
                height: 4,
                width: 8,
                grid:
                    "........\n" +
                    "........\n" +
                    "........\n" +
                    "........\n",
            }),
        ],
    ])('should increment generation', (initialGeneration, nextGeneration) => {
        assertNextGeneration(initialGeneration, nextGeneration)
    })

    it.each([
        [
            GenerationBuilder.formatWith({
                generation: 2,
                height: 4,
                width: 8,
                grid:
                    "........\n" +
                    "...*....\n" +
                    "........\n" +
                    "........\n",
            }),
            GenerationBuilder.formatWith({
                generation: 3,
                height: 4,
                width: 8,
                grid:
                    "........\n" +
                    "........\n" +
                    "........\n" +
                    "........\n",
            })
        ],
        [
            GenerationBuilder.formatWith({
                generation: 1,
                height: 4,
                width: 8,
                grid:
                    "........\n" +
                    "..**...*\n" +
                    "..**....\n" +
                    "........\n",
            }),
            GenerationBuilder.formatWith({
                generation: 2,
                height: 4,
                width: 8,
                grid:
                    "........\n" +
                    "..**....\n" +
                    "..**....\n" +
                    "........\n",
            })
        ],
    ])('should kill cell if it has fewer than 2 neighbours',
        (initialGeneration, nextGeneration) => {
            assertNextGeneration(initialGeneration, nextGeneration)
        })

    it.each([
        [
            GenerationBuilder.formatWith({
                generation: 1,
                height: 4,
                width: 8,
                grid:
                    "........\n" +
                    ".***....\n" +
                    "..**....\n" +
                    "........\n",
            }),
            GenerationBuilder.formatWith({
                generation: 2,
                height: 4,
                width: 8,
                grid:
                    "..*.....\n" +
                    ".*.*....\n" +
                    ".*.*....\n" +
                    "........\n",
            })
        ],
        [
            GenerationBuilder.formatWith({
                generation: 1,
                height: 4,
                width: 8,
                grid:
                    "........\n" +
                    ".****...\n" +
                    "..****..\n" +
                    "...****.\n",
            }),
            GenerationBuilder.formatWith({
                generation: 2,
                height: 4,
                width: 8,
                grid:
                    "..**....\n" +
                    ".*...*..\n" +
                    ".*....*.\n" +
                    "..*...*.\n",
            })
        ],
    ])('should kill cell if it has more than 3 neighbours',
        (initialGeneration, nextGeneration) => {
            assertNextGeneration(initialGeneration, nextGeneration)
        })

    it.each([
        [
            GenerationBuilder.formatWith({
                generation: 1,
                height: 4,
                width: 8,
                grid:
                    "........\n" +
                    "..**....\n" +
                    "..**....\n" +
                    "........\n",
            }),
            GenerationBuilder.formatWith({
                generation: 2,
                height: 4,
                width: 8,
                grid:
                    "........\n" +
                    "..**....\n" +
                    "..**....\n" +
                    "........\n",
            })
        ],
        [
            GenerationBuilder.formatWith({
                generation: 1,
                height: 4,
                width: 8,
                grid:
                    "........\n" +
                    "..**....\n" +
                    ".*..*...\n" +
                    "..**....\n",
            }),
            GenerationBuilder.formatWith({
                generation: 2,
                height: 4,
                width: 8,
                grid:
                    "........\n" +
                    "..**....\n" +
                    ".*..*...\n" +
                    "..**....\n",
            })
        ],
        [
            GenerationBuilder.formatWith({
                generation: 1,
                height: 4,
                width: 8,
                grid:
                    "..**....\n" +
                    ".*..*...\n" +
                    "..*.*...\n" +
                    "...*....\n",
            }),
            GenerationBuilder.formatWith({
                generation: 2,
                height: 4,
                width: 8,
                grid:
                    "..**....\n" +
                    ".*..*...\n" +
                    "..*.*...\n" +
                    "...*....\n",
            })
        ],
    ])('should keep cell cell alive if it has more than 1 neighbour and less than 4 neighbours',
        (initialGeneration, nextGeneration) => {
            assertNextGeneration(initialGeneration, nextGeneration)
        })


    it.each([
        [
            GenerationBuilder.formatWith({
                generation: 1,
                height: 4,
                width: 8,
                grid:
                    "........\n" +
                    "....*...\n" +
                    "...**...\n" +
                    "........\n",
            }),
            GenerationBuilder.formatWith({
                generation: 2,
                height: 4,
                width: 8,
                grid:
                    "........\n" +
                    "...**...\n" +
                    "...**...\n" +
                    "........\n",
            })
        ],
    ])('should keep cell cell alive if it has more than 1 neighbour and less than 4 neighbours',
        (initialGeneration, nextGeneration) => {
           assertNextGeneration(initialGeneration, nextGeneration)
        })

    it.each([
            [
                GenerationBuilder.formatWith({
                    generation: 12,
                    height: 11,
                    width: 5,
                    grid:
                        ".....\n" +
                        ".**..\n" +
                        ".**..\n" +
                        ".....\n" +
                        ".....\n" +
                        "...**\n" +
                        "...**\n" +
                        "*....\n" +
                        ".....\n" +
                        ".....\n" +
                        ".....\n" +
                        ".....\n"
                }),
                GenerationBuilder.formatWith({
                    generation: 13,
                    height: 11,
                    width: 5,
                    grid:
                        ".....\n" +
                        ".**..\n" +
                        ".**..\n" +
                        ".....\n" +
                        ".....\n" +
                        "...**\n" +
                        "...**\n" +
                        ".....\n" +
                        ".....\n" +
                        ".....\n" +
                        ".....\n" +
                        ".....\n"
                }),
            ]
        ])('should work irrespective of height and width',
        (initialGeneration, nextGeneration) => {
            assertNextGeneration(initialGeneration, nextGeneration)
        })
})
