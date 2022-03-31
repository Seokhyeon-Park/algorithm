// 세 개의 자연수 A, B, C가 주어질 때 A × B × C를 계산한 결과에 0부터 9까지 각각의 숫자가 몇 번씩 쓰였는지를 구하는 프로그램을 작성하시오.
// 예를 들어 A = 150, B = 266, C = 427 이라면 A × B × C = 150 × 266 × 427 = 17037300 이 되고, 계산한 결과 17037300 에는 0이 3번, 1이 1번, 3이 2번, 7이 2번 쓰였다.

import fs from 'fs';   // 파일시스템

// 파일 읽어오기
const input = fs.readFileSync('/dev/stdin').toString().split("\n");
// const input = fs.readFileSync('./input.txt').toString().split("\n");

const A:number = parseInt(input[0]);
const B:number = parseInt(input[1]);
const C:number = parseInt(input[2]);
const numString:string = String(A*B*C);
let count = new Array(10).fill(0);
for(let val of numString.split("")){
    count[Number(val)] += 1;
}
for(let val of count){
    console.log(val);
}

// Case 2.

// const list = input.map((num) => Number(num));
// const mult = list.reduce((acc, cur) => {
//     return acc * cur;
// }, 1);

// let numString = String(mult);
// let count = new Array(10).fill(0);;


// for(let val of numString.split("")){
//     count[Number(val)] += 1;
// }

// for(let val of count){
//     console.log(val);
// }