import fs from 'fs';   // 파일시스템

// 파일 읽어오기
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
// const input = fs.readFileSync('./input.txt').toString().split(' ');

// 값 확인
// console.log("input?? : ", input);
let a = parseInt(input[0]);
let b = parseInt(input[1]);

// 출력
console.log(a-b);