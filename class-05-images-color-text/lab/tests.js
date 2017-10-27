'use strict';

function setElementsPass(id) {
    const p = document.getElementById(id);
    p.setAttribute('style', 'white-space: pre;');
    p.textContent = 'TEST FOR ' + id + '()' + ' PASSES';
    p.style.color = 'green';
}

function setElementsFail(id, cb, expected) {
    const p = document.getElementById(id);
    p.setAttribute('style', 'white-space: pre;');
    p.textContent += 'TEST FOR ' + id + '()' + ' FAILS\r\n';
    p.textContent += 'Expected: ' + expected + '\r\n';
    p.innerHTML += 'Got: ' + cb;
    p.style.color = 'red';

}

function testSum() { //eslint-disable-line
    if (sum(4, 7)[1] === 'The sum of 4 and 7 is 11.') {
        setElementsPass('sum');
    } else {
        setElementsFail('sum', sum(4, 7), '11, The sum of 4 and 7 is 11.');
    }
}

function testMultiply() { //eslint-disable-line
    if (multiply(5, 9)[1] === 'The product of 5 and 9 is 45.') {
        setElementsPass('multiply');
    } else {
        setElementsFail('multiply', multiply(5, 9), '45,The Product of 5 and 9 is 45.');
    }
}

function testSumAndMultiply() { //eslint-disable-line
    if (sumAndMultiply(4, 7, 5)[2] === '4 and 7 and 5 sum to 16.' && sumAndMultiply(4, 7, 5)[3] === 'The product of 4 and 7 and 5 is 140.') {
        setElementsPass('sumAndMultiply');
    } else {
        setElementsFail('sumAndMultiply', sumAndMultiply(4, 7, 5), '16,140,4 and 7 and 5 sum to 16.,The product of 4 and 7 and 5 is 140.');
    }
}

const testArray = [2,3,4];

function testSumArray() { //eslint-disable-line
    if (sumArray(testArray)[1] === '2,3,4 was passed in as an array of numbers, and 9 is their sum.') {
        setElementsPass('sumArray');
    } else {
        setElementsFail('sumArray', sumArray(testArray), '9,2,3,4 was passed in as an array of numbers, and 9 is their sum.');
    }
}

function testMultiplyArray() { //eslint-disable-line
    if (multiplyArray(testArray)[1] === 'The numbers 2,3,4 have a product of 24.') {
        setElementsPass('multiplyArray');
    } else {
        setElementsFail('multiplyArray', multiplyArray([testArray]), '24,The numbers 2,3,4 have a product of 24.');
    }
}
