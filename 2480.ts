// 3개 주사위의 나온 눈이 주어질 때, 상금을 계산하는 프로그램을 작성 하시오.

import fs = require('fs')   // 파일시스템

// 파일 읽어오기
// const input = fs.readFileSync('/dev/stdin').toString().split(" ");
const input = fs.readFileSync('./input.txt').toString().split(" ");

// 주사위 값 불러오기
const diceVal1:number = parseInt(input[0]);
const diceVal2:number = parseInt(input[1]);
const diceVal3:number = parseInt(input[2]);

// 값 확인
console.log("diceVal1 ? : ", diceVal1);
console.log("diceVal2 ? : ", diceVal2);
console.log("diceVal3 ? : ", diceVal3);

// 출력
// 같은 눈이 3개가 나오면 10,000원+(같은 눈)×1,000원의 상금을 받게 된다. 
// 같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원의 상금을 받게 된다. 
// 모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원의 상금을 받게 된다.
