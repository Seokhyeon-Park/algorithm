import fs = require('fs')   // 파일시스템

// 파일 읽어오기
const input = fs.readFileSync('/dev/stdin').toString().trim();
// const input = fs.readFileSync('./input.txt').toString().trim();

// 출력
console.log(Number(input)-543);