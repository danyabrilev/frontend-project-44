
import { sayHi } from "../src/cli.js";
import readlineSync from 'readline-sync';

function isEven(number) {
    return number % 2 === 0;
}

function main() {
    const name = sayHi();
    let isWin = true;

    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    for (let i = 0; i < 3; i++) {
        const number = Math.floor(Math.random() * (100 - 0) + 0);
        console.log(`Question: ${number}`);

        const answer = readlineSync.question(`Your answer: `),
            correctAnswer = isEven(number) ? 'yes' : 'no';

        if (answer === correctAnswer) {
            console.log('Correct!')
        } else {
            console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
            isWin = false;
            break;
        }

    }

    if (isWin) {
        console.log(`Congratulations, ${name}!`)
    } else {
        console.log(`Let's try again, ${name}!`);
    }
}

main()