import { sayHi } from "../src/cli.js";
import readlineSync from 'readline-sync';

function gcd(a, b) {
    if (b === 0) {
        return a;
    }

    return gcd(b, a % b);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function main() {
    const name = sayHi();
    let isWin = true;

    console.log('Find the greatest common divisor of given numbers.');

    for (let i = 0; i < 3; i++) {
        const number_1 = getRandomInt(0, 10),
            number_2 = getRandomInt(0, 10);

        console.log(`Question: ${number_1} ${number_2}`);

        let gcd_value = gcd(number_1, number_2);
        const answer = readlineSync.question(`Your answer: `);

        if (answer === String(gcd_value)) {
            console.log('Correct!')
        } else {
            console.log(`${answer} is wrong answer ;(. Correct answer was ${gcd_value}`);
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