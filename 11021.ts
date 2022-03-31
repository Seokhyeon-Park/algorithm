// 입력
// 첫째 줄에 테스트 케이스의 개수 T가 주어진다.
// 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

// 출력
// 각 테스트 케이스마다 "Case #x: "를 출력한 다음, A+B를 출력한다. 테스트 케이스 번호는 1부터 시작한다.

import fs from 'fs';   // 파일시스템

// 파일 읽어오기
const input = fs.readFileSync('/dev/stdin').toString().split("\n");
// const input = fs.readFileSync('./input.txt').toString().split("\n");

const factorT:number = parseInt(input[0]);
let result:string = "";

// 출력
// Case #1: 
for(let ind=1;ind<=factorT;ind++){
    result = result + "Case #" + ind + ": " + (parseInt(input[ind].split(" ")[0]) + parseInt(input[ind].split(" ")[1])) + "\n";
}
console.log(result);