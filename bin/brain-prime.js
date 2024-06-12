#!/usr/bin/env node

import { sayHi } from "../src/cli.js";
import readlineSync from 'readline-sync';

let number = Math.floor(Math.random() * (100 - 0) + 0);

let defNumber = (number % Math.floor(Math.random() * (100 - 0) + 0) !== 0 && number % 1 !== 0 && number % number !== 0) ? "yes" : "no";

function main() {
    const name = sayHi();
    let isWin = true;

    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

    console.log(`Question: ${number}`)


    for (let i = 0; i < 3; i++) {
        const correct = defNumber,
            answer = readlineSync.question(`Your answer: `);

        if (answer === String(correct)) {
            console.log('Correct!')
            break;
        } else {
            console.log(`${answer} is wrong answer ;(. Correct answer was ${correct}`);
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