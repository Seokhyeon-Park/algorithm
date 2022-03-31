// 입력
// 첫째 줄에 테스트 케이스의 개수 T가 주어진다.
// 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

// 출력
// 각 테스트 케이스마다 "Case #x: A + B = C" 형식으로 출력한다. x는 테스트 케이스 번호이고 1부터 시작하며, C는 A+B이다.

import fs from 'fs';   // 파일시스템

// 파일 읽어오기
const input = fs.readFileSync('/dev/stdin').toString().split("\n");
// const input = fs.readFileSync('./input.txt').toString().split("\n");

const factorT:number = parseInt(input[0]);
let result:string = "";

// 출력
// Case #x: A + B = C
for(let ind=1;ind<=factorT;ind++){
    let A:string = input[ind].split(" ")[0];
    let B:string = input[ind].split(" ")[1];
    result = result + "Case #" + ind + ": " + A + " + " + B + " = " + (parseInt(A) + parseInt(B)) + "\n";
}

console.log(result);