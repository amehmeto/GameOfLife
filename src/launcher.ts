import {GenerationBuilder} from './GenerationBuilder'
import {GameOfLife} from './GameOfLife'

let generation = GenerationBuilder.formatWith({
        generation: 1,
        height: 40,
        width: 40,
        grid:
            "                                        \n" +
            "                                        \n" +
            "                                        \n" +
            "                                        \n" +
            "                                        \n" +
            "                                        \n" +
            "                                        \n" +
            "                                        \n" +
            "                                        \n" +
            "                                        \n" +
            "                                        \n" +
            "                                        \n" +
            "                                        \n" +
            "                                        \n" +
            "                                        \n" +
            "                                        \n" +
            "                                        \n" +
            "                                        \n" +
            "                                        \n" +
            "                                        \n" +
            "                                        \n" +
            "                                        \n" +
            "                                        \n" +
            "                                        \n" +
            "                                        \n" +
            "         ▓▓  ▓▓                         \n" +
            "           ▓▓                           \n" +
            "           ▓▓                           \n" +
            "        ▓ ▓  ▓ ▓                        \n" +
            "        ▓      ▓                        \n" +
            "                                        \n" +
            "        ▓      ▓                        \n" +
            "         ▓▓  ▓▓                         \n" +
            "          ▓▓▓▓                          \n" +
            "                                        \n" +
            "           ▓▓                           \n" +
            "           ▓▓                           \n" +
            "                                        \n" +
            "                                        \n" +
            "                                        \n" +
            "                                        \n",
        /*
            ".......................*................\n" +
            ".....................*.*................\n" +
            "...........**......**...........**......\n" +
            "..........*...*....**...........**......\n" +
            "**.......*.....*...**...................\n" +
            "**.......*...*.**....*.*................\n" +
            ".........*.....*.......*................\n" +
            "..........*...*.........................\n" +
            "...........**...........................\n" +
            "........................................\n" +
            "........................................\n" +
            "........................................\n" +
            "........................................\n" +
            "........................................\n" +
            "........................................\n" +
            "........................................\n" +
            "........................................\n" +
            "........................................\n" +
            "........................................\n" +
            "........................................\n" +
            "........................................\n" +
            "........................................\n" +
            "........................................\n" +
            "........................................\n" +
            "........................................\n" +
            "........................................\n" +
            "........................................\n" +
            "........................................\n" +
            "........................................\n" +
            "........................................\n" +
            "........................................\n" +
            "........................................\n" +
            "........................................\n" +
            "........................................\n" +
            "........................................\n" +
            "........................................\n" +
            "........................................\n" +
            "........................................\n" +
            "........................................\n" +
            "........................................\n" +
            "........................................\n",
         */
    }
)
function sleep(milliseconds: number) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

while (true){
    generation = new GameOfLife().generateFrom(generation)
    console.clear()
    console.log(generation)
    sleep(100)
}