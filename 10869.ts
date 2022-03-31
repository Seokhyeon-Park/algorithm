// 두 자연수 A와 B가 주어진다.
// 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오. 
import fs from 'fs';   // 파일시스템

// 파일 읽어오기
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
// const input = fs.readFileSync('./input.txt').toString().split(' ');

// 값 확인
// console.log("input?? : ", input);
const a = parseInt(input[0]);
const b = parseInt(input[1]);

// 출력
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(Math.floor(a/b));
console.log(a%b);
