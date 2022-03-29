import fs = require('fs')   // 파일시스템

const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
// const input = fs.readFileSync('./input.txt').toString().trim().split("\n");

const sum = (input[1].split("").map((val) => Number(val))).reduce((previousValue, currentValue) => {
    return previousValue = previousValue + currentValue;
}, 0);

console.log(sum);