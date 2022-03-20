// 첫째 줄에 (A+B)%C
// 둘째 줄에 ((A%C) + (B%C))%C
// 셋째 줄에 (A×B)%C
// 넷째 줄에 ((A%C) × (B%C))%C

import fs = require('fs')   // 파일시스템

// 파일 읽어오기
const input = fs.readFileSync('/dev/stdin').toString().split(" ");
// const input = fs.readFileSync('./input.txt').toString().split(" ");

const A:number = parseInt(input[0]);
const B:number = parseInt(input[1]);
const C:number = parseInt(input[2]);


// 출력
console.log((A+B)%C);
console.log(((A%C) + (B%C))%C);
console.log((A*B)%C);
console.log(((A%C) * (B%C))%C);
