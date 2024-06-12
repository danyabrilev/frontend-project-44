#!/usr/bin/env node

import { sayHi } from "../src/cli.js";
import readlineSync from 'readline-sync';

function generateArray(start, step) {
    const array = [start];

    for (let i = 0; i < 9; i++) {
        array.push(array[array.length - 1] + step);
    }

    return array;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function main() {
    const name = sayHi();
    let isWin = true;

    console.log('What number is missing in the progression?');

    for (let i = 0; i < 3; i++) {
        const random_start = getRandomInt(0, 100),
            random_step = getRandomInt(1, 10);

        const random_array = generateArray(random_start, random_step);
        const random_index = getRandomInt(0, random_array.length - 1);

        console.log(`Question: ${random_array.map((el, index) => {
            if (index === random_index) {
                return '..';
            }

            return el;
        }).join(' , ')}`)

        const correct = random_array[random_index],
            answer = readlineSync.question(`Your answer: `);

        if (answer === String(correct)) {
            console.log('Correct!')
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