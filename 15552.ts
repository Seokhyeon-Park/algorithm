// 첫 줄에 테스트케이스의 개수 T가 주어진다. T는 최대 1,000,000이다. 다음 T줄에는 각각 두 정수 A와 B가 주어진다. A와 B는 1 이상, 1,000 이하이다.
// 각 테스트케이스마다 A+B를 한 줄에 하나씩 순서대로 출력한다.

import fs = require('fs')   // 파일시스템

// 파일 읽어오기
const input = fs.readFileSync('/dev/stdin').toString().split("\n");
// const input = fs.readFileSync('./input.txt').toString().split("\n");

// 계수 T
const facotrT:number = parseInt(input[0]);
let result:string = "";

for(let ind=1; ind<=facotrT;ind++){
    result = result + (parseInt(input[ind].split(" ")[0]) + parseInt(input[ind].split(" ")[1])) + "\n";
}

console.log(result);