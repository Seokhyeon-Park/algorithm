import fs from 'fs';   // 파일시스템

// 파일 읽어오기
const input = fs.readFileSync('/dev/stdin').toString().split("\n");
// let input = fs.readFileSync('./input.txt').toString().split("\n");

// 입력값 분리
const upperLine:number = parseInt(input[0]);
const underLine:string = String(input[1]);

// 출력
console.log(upperLine*parseInt(underLine[2]));
console.log(upperLine*parseInt(underLine[1]));
console.log(upperLine*parseInt(underLine[0]));
console.log(upperLine*parseInt(underLine));
