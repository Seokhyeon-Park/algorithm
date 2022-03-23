// 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제
// 하지만, 오른쪽을 기준으로 정렬한 별(예제 참고)을 출력하시오.

import fs = require('fs')   // 파일시스템

// 파일 읽어오기
const input = fs.readFileSync('/dev/stdin').toString().split("\n");
// const input = fs.readFileSync('./input.txt').toString().split("\n");

// 값 불러오기
const N:number = Number(input[0]);
let result:string = "";

// 출력
for(let ind=0; ind<N; ind++){
    result = result + (" ".repeat(N-ind-1)) + ("*".repeat(ind+1)) + "\n";
}

console.log(result);