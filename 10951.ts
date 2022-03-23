// 입력은 여러 개의 테스트 케이스로 이루어져 있다.
// 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

import fs = require('fs')   // 파일시스템

// 파일 읽어오기
// const input = fs.readFileSync('/dev/stdin').toString().split("\n");
const input = fs.readFileSync('./input.txt').toString().split("\n");
let result:string = "";

// 데이터 가져오기
let ind:number = 0;

while(ind<input.length-1){
    let data = input[ind].split(" ").map(x => Number(x));
    result = result + (data[0] + data[1]) + "\n";
    ind++;
}

console.log(result);