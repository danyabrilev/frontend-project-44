#!/usr/bin/env node

import { sayHi } from "../src/cli.js";
import readlineSync from 'readline-sync';

const operators = ['+', '-', '*']

function main() {
    const name = sayHi();
    let isWin = true;

    console.log('What is the result of expression?');
    for (let i = 0; i < 3; i++) {
        const number_1 = Math.floor(Math.random() * (100 - 0) + 0),
            number_2 = Math.floor(Math.random() * (100 - 0) + 0),
            randomIndex = Math.floor(Math.random() * operators.length),
            random_oper = operators[randomIndex];

        console.log(`Question: ${number_1} ${random_oper} ${number_2}`);

        let result = 0;

        switch (random_oper) {
            case '+':
                result = number_1 + number_2;
                break;
            case '-':
                result = number_1 - number_2;
                break;
            case '*':
                result = number_1 * number_2;
                break;
        }

        const answer = readlineSync.question(`Your answer: `);

        if (answer === String(result)) {
            console.log('Correct!')
        } else {
            console.log(`${answer} is wrong answer ;(. Correct answer was ${result}`);
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