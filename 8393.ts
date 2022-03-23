import fs = require('fs')   // 파일시스템

// 파일 읽어오기
const input = fs.readFileSync('/dev/stdin').toString().split("\n");
// const input = fs.readFileSync('./input.txt').toString().split("\n");

// 값 나누기
const val:number = parseInt(input[0]);
let sum:number = 0;

// 출력
// n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.
for(let ind = 1; ind <= val; ind++){
    sum = sum + ind;
}

console.log(sum);