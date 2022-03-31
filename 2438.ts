//첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제

import fs from 'fs';   // 파일시스템

// 파일 읽어오기
const input = fs.readFileSync('/dev/stdin').toString().split("\n");
// const input = fs.readFileSync('./input.txt').toString().split("\n");

// 값 불러오기
const N:number = Number(input[0]);
let result:string = "";

// 출력
for(let ind=0; ind<N; ind++){
    result = result + ("*".repeat(ind+1)) + "\n";
}

console.log(result);