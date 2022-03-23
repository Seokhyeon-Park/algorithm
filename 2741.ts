// 자연수 N이 주어졌을 때, 1부터 N까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오.
// 첫째 줄에 100,000보다 작거나 같은 자연수 N이 주어진다.

import fs = require('fs')   // 파일시스템

// 파일 읽어오기
const input = fs.readFileSync('/dev/stdin').toString().split("\n");
// const input = fs.readFileSync('./input.txt').toString().split("\n");

// 결과
let result:string = "";

// 출력
for(let ind=1; ind<=parseInt(input[0]); ind++){
    result = result + ind + "\n";
}

console.log(result);